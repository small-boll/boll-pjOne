/*
 * @Author: liangmin
 * @Date: 2022-05-19 14:44:29
 * @FilePath: \boll-pjOne\src\router\index.js
 * @Description: 一级路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Index'
import layout from '@/layout/layout'
import baseRouter from "./baseRouter"
import cssRouter from "./cssRouter"

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
        ...baseRouter,
        ...cssRouter
      ]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('to, from, next: ', to, from, next)
  if (Vue.prototype.breakHotLayer) {
    Vue.prototype.breakHotLayer.remove()
    Vue.prototype.breakHotLayer = null
  }
  // console.log(from)
  // store.commit('user/set_page_flag', from.path === '/')
  next()
})
// 解决重复点击警告问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


export default router