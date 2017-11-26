import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/views/dashboard'
import addTask from '@/views/addTask'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: DashBoard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: addTask
    }
  ]
})
