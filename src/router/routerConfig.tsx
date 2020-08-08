import { lazy } from 'react'
import { Iroute } from '@/components/commons/RenderRoutes'

import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

const routerConfig:Iroute[] = [
  {
    path: '/',
    component: BasicLayout,
    childRoutes: [
      {
        path: '/',
        exact: true,
        name: '首页',
        component: lazy(()=>import('@/views/Home'))
      },
      {
        path: '/competition',
        name: '比赛安排',
        requireAuth:true,
        component:lazy(()=>import('@/views/Competition'))
      },
      {
        path: '/volunteer',
        name: '志愿者',
        requireAuth:true,
        component:lazy(()=>import('@/views/Volunteer'))
      },
      {
        path: '/accommodation',
        name: '食宿安排',
        requireAuth:true,
        component:lazy(()=>import('@/views/Accommodation'))
      },
      {
        path: '/center',
        name: '个人中心',
        requireAuth:true,
        component:lazy(()=>import('@/views/Center'))
      },
      {
        path: 'exception',
        name: '异常页面',
        childRoutes: [
          {
            path: '/exception/404',
            name: '404',
            component:lazy(()=>import('@/views/Exception/404'))
          }
        ]
      },
      {path:'*',exact:true,redirect:'/exception/404'}
    ]
   }
 ]

export default routerConfig