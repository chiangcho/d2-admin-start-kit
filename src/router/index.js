import Vue from 'vue';
import VueRouter from 'vue-router';

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import store from '@/store/index';

import util from '@/libs/util.js';

// 路由数据
import routes from './routes';

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start()
  // 关闭搜索面板
  store.commit('d2admin/search/set', false)
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some(r => r.meta.auth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = util.cookies.get('token')
    if (token && token !== 'undefined') {
      next()
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
      // https://github.com/d2-projects/d2-admin/issues/138
      NProgress.done()
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

router.afterEach(to => {
  // 进度条
  NProgress.done()
  // 多页控制 打开新的页面
  if (to.params.replace && to.params.replace === 'true') {
    delete to.params.replace
    store.dispatch('d2admin/page/replace', to)
  } else {
    store.dispatch('d2admin/page/open', to)
  }
  // 更改标题
  util.title(to.meta.title)
})
// 根据state中opened数据，将不在列表中的页面从vue的缓存中删除
function removeCache (vm) {
  var openedPages = vm.$store.state.d2admin.page.opened
  if (
    openedPages &&
    vm.$vnode.parent &&
    vm.$vnode.parent.componentInstance &&
    vm.$vnode.parent.componentInstance.cache
  ) {
    var caches = vm.$vnode.parent.componentInstance.cache
    var keys = vm.$vnode.parent.componentInstance.keys
    keys.forEach((key, keyIndex) => {
      const pageIndex = openedPages.findIndex(
        page => key.indexOf(page.fullPath) >= 0
      )
      if (pageIndex < 0) {
        keys.splice(keyIndex, 1)
        caches[key].componentInstance.$destroy()
        delete caches[key]
      }
    })
  }
}

// 在路由进入和更新时进行打开页面的检查，缓存了但是未在打开列表的则从缓存中移除
Vue.mixin({
  beforeRouteUpdate: function (to, from, next) {
    removeCache(this)
    next()
  },
  beforeRouteEnter: function (to, from, next) {
    next(vm => {
      removeCache(vm)
    })
  }
})
export default router
