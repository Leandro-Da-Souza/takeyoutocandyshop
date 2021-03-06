import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from "../views/ProductDetail.vue"

import CartDetail from '../views/CartDetail'

import CafeDetail from "../views/CafeDetail.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {

    path: '/cartdetail',
    name: 'CartDetail',
    component: CartDetail
  },
  {

    path: '/cafeDetail',
    name: 'CafeDetail',
    component: CafeDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
