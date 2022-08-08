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

Vue.use(Router)

export default new Router({
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
        ...baseRouter
      ]
    }
  ]
})
