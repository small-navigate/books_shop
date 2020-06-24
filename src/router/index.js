import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Center from '../views/Center.vue'
import Details from '../views/Details.vue'
import Classification from '../views/Classification.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/Details',
    component: Details
  },
  {
    path: '/Classification',
    component: Classification
  }
]

const router = new VueRouter({
  routes
})

export default router
