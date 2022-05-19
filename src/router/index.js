/*
 * @Author: liangmin 649554709@qq.com
 * @Date: 2022-05-19 14:44:29
 * @FilePath: \boll-pjOne\src\router\index.js
 * @Description: [文件描述]
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PMwidth from '@/components/buju/PMwidth'
import StarBG from '@/components/backCity/StarBG'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pm',
      name: 'PMwidth',
      component: PMwidth
    },
    {
      path: '/StarBG',
      name: 'StarBG',
      component: StarBG
    },
  ]
})
