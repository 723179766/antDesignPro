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
            name: 'menu.welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/admin/roleAndUser',
            name: 'menu.roleAndUser',
            routes: [
              {
                path: '/admin/roleAndUser/userManage',
                name: 'menu.roleAndUser.userManage',
                component: './userManage',
              },
              {
                path: '/admin/roleAndUser/roleManage',
                name: 'menu.roleAndUser.roleManage',
                component: './roleManage',
              }
            ]
          },
          {
            path: '/admin/Role1Page1',
            name: 'menu.Role1Page1',
            component: './Role1Page1',
          },
          {
            path: '/admin/Role1Page2',
            name: 'menu.Role1Page2',
            component: './Role1Page2',
          },
          {
            path: '/admin/Role2Page1',
            name: 'menu.Role2Page1',
            component: './Role2Page1',
          },
          {
            path: '/admin/Role2Page2',
            name: 'menu.Role2Page2',
            component: './Role2Page2',
          },
          {
            path: '/admin/cms',
            name: 'menu.cms',
            routes: [
              {
                path: '/admin/cms/cmsHomePage',
                name: 'menu.cms.cmsHomePage',
                component: './cmsHomePage',
              },
              {
                path: '/admin/cms/cmsEditPage',
                name: 'menu.cms.cmsEditPage',
                routes: [
                  {
                    path: '/admin/cms/cmsEditPage/cmsEditNews',
                    name: 'menu.cms.cmsEditPage.cmsEditNews',
                    component: './cmsEditNews',
                  },
                  {
                    path: '/admin/cms/cmsEditPage/cmsEditWrite',
                    name: 'menu.cms.cmsEditPage.cmsEditWrite',
                    component: './cmsEditWrite',
                  }
                ]
              }
            ]
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
