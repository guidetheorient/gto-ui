import {createRouter, createWebHistory} from 'vue-router'

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
        }
      ]
    }
  ]
})