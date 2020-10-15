import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Slot from '@/components/slot/simple/SlotMain'//普通插槽
import SlotHasName from '@/components/slot/hasName/SlotMainHasName'//具名插槽

import transitionSingle from '@/components/transition/single/transitionSingle'//单元素过渡
import transitionMultiple from '@/components/transition/multiple/transitionMultiple'//多组件过渡

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/SlotHasName',
      name: 'SlotHasName',
      component: SlotHasName
    },
    {
      path: '/transitionSingle',
      name: 'transitionSingle',
      component: transitionSingle
    },
    {
      path: '/transitionMultiple',
      name: 'transitionMultiple',
      component: transitionMultiple
    },
  ]
})
