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
        },
        {
          path: 'GTooltip',
          component: () => import('./views/GTooltip/index.vue'),
          meta: {
            name: '文字提示'
          }
        },
        {
          path: 'GForm',
          component: () => import('./views/GForm/index.vue'),
          meta: {
            name: '表单'
          }
        },
        {
          path: 'GInputNumber',
          component: () => import('./views/GInputNumber/index.vue'),
          meta: {
            name: '数字输入框'
          }
        },
        {
          path: 'GCarousel',
          component: () => import('./views/GCarousel/index.vue'),
          meta: {
            name: '轮播'
          }
        },
        {
          path: 'GRadio',
          component: () => import('./views/GRadio/index.vue'),
          meta: {
            name: '单选框'
          }
        }
      ]
    }
  ]
})
