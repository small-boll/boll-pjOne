import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PMwidth from '@/components/buju/PMwidth'

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
  ]
})
