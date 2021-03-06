import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
  ]
})
