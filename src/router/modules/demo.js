import layoutHeaderAside from '@/layout/header-aside';

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
    }
  ])('demo-')
}
