import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import MenuView from '@/components/leftSlide'
// import DashBoard from '@/pages/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/dashboard',
      name: 'DashBoard',
      component: MenuView,
    }
  ]
})
