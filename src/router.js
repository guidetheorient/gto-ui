import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Layout/index.vue'),
      redirect: '/GButton',
      children: [
        {
          path: 'GButton',
          component: () => import('./views/GButton/index.vue'),
          meta: {
            name: '按钮'
          }
        },
        {
          path: 'GLayout',
          component: () => import('./views/GLayout/index.vue'),
          meta: {
            name: '布局'
          }
        },
        {
          path: 'GMessage',
          component: () => import('./views/GMessage/index.vue'),
          meta: {
            name: '消息提示'
          }
        },
        {
          path: 'GIcon',
          component: () => import('./views/GIcon/index.vue'),
          meta: {
            name: '图标'
          }
        }
      ]
    }
  ]
})
