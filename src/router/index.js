import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Center from '../views/Center.vue'
import Details from '../views/Details.vue'
import Classification from '../views/Classification.vue'
import TagDetails from '../views/TagDetails.vue'
import Books from '../views/books.vue'

Vue.use(VueRouter)

const routes = [{
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
  },
  {
    path: '/TagDetails',
    component: TagDetails
  },
  {
    path: '/Books',
    component: Books
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/') return next('/home')
  if (!tokenStr) {
    if (to.path === '/center' || to.path === '/cart') return next('/login')
  } else {
    if (to.path === '/login' || to.path === '/register') return next('/home')
  }
  next()
})
export default router
