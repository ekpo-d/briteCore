import Vue from 'vue'
import Router from 'vue-router'
import InsurerInput from '@/components/InsurerInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InsurerInput',
      component: InsurerInput
    }
  ]
})
