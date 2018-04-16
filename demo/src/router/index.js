import Vue from 'vue'
import Router from 'vue-router'
import subPageRoutes from './route.js'

// Core
const routes = [
  {
    // index
    path: '/',
    name: 'index',
    component: require('../main/index.vue')
  },
  {
    // 目录
    path: '/components',
    name: 'components',
    component: require('../main/components.vue')
  }
]

const config = {
  mode: 'history',
  routes: routes.concat(subPageRoutes)  // （缩写）相当于 routes: routes
}

const index = new Router(config)

console.log(index)

Vue.use(Router)
export default index