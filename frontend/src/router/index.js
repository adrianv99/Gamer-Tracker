import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apex',
    name: 'Apex',
    component: () => import(/* webpackChunkName: "about" */ '../views/Apex.vue')
  },
  {
    path: '/apex/:gamertag/:platform',
    name: 'ApexStats',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApexStats.vue')
  },
  {
    path: '/overwatch',
    name: 'Overwatch',
    component: () => import(/* webpackChunkName: "about" */ '../views/Overwatch.vue')
  },
  {
    path: '/overwatch/:gamertag/:platform',
    name: 'OverwatchStats',
    component: () => import(/* webpackChunkName: "about" */ '../views/OverwatchStats.vue')
  },
  {
    path: '/division2',
    name: 'Division2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Division2.vue')
  },
  {
    path: '/division2/:gamertag/:platform',
    name: 'Division2Stats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Division2Stats.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
