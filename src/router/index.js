/*
 * @Author: liangmin
 * @Date: 2022-05-19 14:44:29
 * @FilePath: \boll-pjOne\src\router\index.js
 * @Description: 一级路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
