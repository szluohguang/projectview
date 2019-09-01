import Vue from 'vue'
import Router from 'vue-router'
import ProjectInfoList from '@/components/ProjectInfoList'
import HelloWorld from '@/components/HelloWorld'
import InputProjInfo from '@/components/InputProjInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectInfoList',
      component: ProjectInfoList,
    },
    {
        path: '/InputProjInfo',
        name: 'InputProjInfo',
        component: InputProjInfo
    }
  ]
})
