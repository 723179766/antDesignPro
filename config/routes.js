export default [
  {
    path: '/admin',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/admin',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/admin',
            redirect: '/admin/welcome',
          },
          {
            path: '/admin/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/admin/Role1Page1',
            name: 'list.Role1Page1',
            component: './Role1Page1',
          },
          {
            path: '/admin/Role1Page2',
            name: 'list.Role1Page2',
            component: './Role1Page2',
          },
          {
            path: '/admin/Role2Page1',
            name: 'list.Role2Page1',
            component: './Role2Page1',
          },
          {
            path: '/admin/Role2Page2',
            name: 'list.Role2Page2',
            component: './Role2Page2',
          },
          {
            path: '/admin/roleAndUser',
            name: 'roleAndUser',
            component: './Role2Page2',
          },
          {
            component: './404',
          }
        ]
      },
    ],
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: './login',
  },
  {
    path: '/register',
    name: 'register',
    component: './register',
  },
  {
    component: './404',
  }
]
