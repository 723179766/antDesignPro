/* 渲染侧边栏菜单，如果不渲染该节点，不可以配置label 和 name 属性，其它规范遵循umi router
  label: （映射菜单翻译）
  name: （映射权限控制）
*/

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
            redirect: '/admin/dashboard',
          },
          {
            path: '/admin/dashboard',
            label: 'menu.dashboard',
            name: 'dashboard',
            component: './Dashboard',
          },
          {
            path: '/admin/roleAndUser',
            label: 'menu.roleAndUser',
            name: 'roleAndUser',
            routes: [
              {
                path: '/admin/roleAndUser/userManage',
                label: 'menu.roleAndUser.userManage',
                name: 'userManage',
                component: './userManage',
              },
              {
                path: '/admin/roleAndUser/roleManage',
                label: 'menu.roleAndUser.roleManage',
                name: 'roleManage',
                component: './roleManage',
              }
            ]
          },
          {
            path: '/admin/Role1Page1',
            label: 'menu.Role1Page1',
            name: 'Role1Page1',
            component: './Role1Page1',
          },
          {
            path: '/admin/Role1Page2',
            label: 'menu.Role1Page2',
            name: 'Role1Page2',
            component: './Role1Page2',
          },
          {
            path: '/admin/Role2Page1',
            label: 'menu.Role2Page1',
            name: 'Role2Page1',
            component: './Role2Page1',
          },
          {
            path: '/admin/Role2Page2',
            label: 'menu.Role2Page2',
            name: 'Role2Page2',
            component: './Role2Page2',
          },
          {
            path: '/admin/cms',
            label: 'menu.cms',
            name: 'cms',
            routes: [
              {
                path: '/admin/cms/cmsHomePage',
                label: 'menu.cms.cmsHomePage',
                name: 'cmsHomePage',
                component: './cmsHomePage',
              },
              {
                path: '/admin/cms/cmsEditPage',
                label: 'menu.cms.cmsEditPage',
                name: 'cmsEditPage',
                routes: [
                  {
                    path: '/admin/cms/cmsEditPage/cmsEditNews',
                    label: 'menu.cms.cmsEditPage.cmsEditNews',
                    name: 'cmsEditNews',
                    component: './cmsEditNews',
                  },
                  {
                    path: '/admin/cms/cmsEditPage/cmsEditWrite',
                    label: 'menu.cms.cmsEditPage.cmsEditWrite',
                    name: 'cmsEditWrite',
                    component: './cmsEditWrite',
                  }
                ]
              },
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
    component: './login',
  },
  {
    path: '/register',
    component: './register',
  },
  {
    component: './404',
  }
]
