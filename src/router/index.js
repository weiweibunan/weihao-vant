import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/menu/v-menu'),
    redirect: '/list',
    children: [
      {
        path: '/list',
        name: 'MenuList',
        component: () => import('../views/menu/menuList')
      }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/order')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/personal/personal'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/personal/login'),
  },
  {
    path: '/shoppingcart',
    name: 'shoppingCart',
    component: () => import('../views/shoppingCart/shoppingCart')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
