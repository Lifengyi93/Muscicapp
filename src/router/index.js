import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import playlists from '@/components/playlists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: playlists
    }
  ]
})
