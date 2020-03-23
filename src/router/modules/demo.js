import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/',
  name: 'demo',
  meta,
  redirect: { name: 'demo-page1' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'page1',
      name: `${pre}page1`,
      component: () => import('@/views/demo/page1'),

      meta: { ...meta, title: '页面 1', cache: true }
    },
    {
      path: 'page2/:id',
      name: `${pre}page2`,
      component: () => import('@/views/demo/page2'),
      props: true,
      meta: { ...meta, title: '页面 2', cache: true }
    },
    {
      path: 'page3',
      name: `${pre}page3`,
      component: () => import('@/views/demo/page3'),
      meta: { ...meta, title: '页面 3', cache: true },
      children: [
        {
          path: 'page4',
          name: `demo-page4`,
          component: () => import('@/views/demo/page4'),
          props: true,
          meta: { ...meta, title: '嵌套子路由page4', cache: true }
        }
      ]
    },
    {
      path: 'split',
      name: `${pre}split`,
      component: () => import('@/views/demo/page1/split.vue'),

      meta: { ...meta, title: '分栏布局', cache: true }
    },
    {
      path: 'pdf',
      name: `${pre}pdf`,
      component: () => import('@/views/demo/page1/pdf.vue'),

      meta: { ...meta, title: 'pdf', cache: true }
    },
    {
      path: 'charsetdetect',
      name: `${pre}charsetdetect`,
      component: () => import('@/views/demo/page1/charsetdetect.vue'),

      meta: { ...meta, title: '自动判断编码', cache: true }
    },
    {
      path: 'richeditor',
      name: `${pre}richeditor`,
      component: () => import('@/views/demo/page1/testricheditor.vue'),

      meta: { ...meta, title: '富文本', cache: true }
    },
    {
      path: 'formtest',
      name: `${pre}formtest`,
      component: () => import('@/views/demo/page1/form.vue'),

      meta: { ...meta, title: '表单', cache: true }
    }
  ])('demo-')
}
