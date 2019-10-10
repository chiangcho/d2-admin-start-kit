// 菜单 顶栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' },
      { path: '/split', title: '分栏布局' },
      { path: '/pdf', title: 'pdf' }
    ]
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },

  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },
  {
    title: '多级页面',
    icon: 'folder-o',
    children: [
      {
        path: '/demo/page1',
        title: 'A 1',
        children: [
          { path: '/demo/page1', title: 'a 1' },
          {
            path: '/demo/page2',
            title: 'a 2',
            children: [
              { path: '/demo/page1', title: 'b 1' },
              { path: '/demo/page2', title: 'b 2' },
              { path: '/demo/page3', title: 'b 3' }
            ]
          },
          { path: '/demo/page3', title: 'a 3' }
        ]
      },
      { path: '/demo/page2', title: 'A 2' },
      { path: '/demo/page3', title: 'A 3' }
    ]
  },
  {
    title: '多级页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/paged1', title: '页面 1' },
      {
        path: '/demo/paged2',
        title: 'B 1',
        children: [
          { path: '/demo/pageb1', title: 'b 1' },
          {
            path: '/demo/pageb2',
            title: 'b 2',
            children: [
              { path: '/demo/pagebb1', title: 'b b 1' },
              { path: '/demo/pagebb2', title: 'b b 2' },
              {
                path: '/demo/pagebb3',
                title: 'b b 3',
                children: [
                  { path: '/demo/pagebbb1', title: 'b b b 1' },
                  { path: '/demo/pagebbb2', title: 'b b b 2' },
                  {
                    path: '/demo/pagebbb3',
                    title: 'b b b 3',
                    children: [
                      { path: '/demo/pagebbbb1', title: 'b b b b 1' },
                      { path: '/demo/pagebbbb2', title: 'b b b b 2' },
                      { path: '/demo/pagebbbb3', title: 'b b b b 3' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { path: '/demo/page3', title: '页面 3' }
    ]
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  }
]
