import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.view.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/developer',
      name: 'developer',
      component: () => import(/* webpackChunkName: "developer" */ './views/developer/Developer.view.vue')
    },
    {
      path: '/musician',
      name: 'musician',
      component: () => import(/* webpackChunkName: "musician" */ './views/musician/Musician.view.vue')
    },
    {
      path: '/writter',
      name: 'writter',
      component: () => import(/* webpackChunkName: "writter" */ './views/writter/Writter.view.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
