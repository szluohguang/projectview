import Vue from 'vue'
import Router from 'vue-router'
import ProjectInfoList from '@/components/ProjectInfoList'
import HelloWorld from '@/components/HelloWorld'
import HelloProjectList from '@/components/HelloProjectList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projinfolist',
      name: 'ProjectInfoList',
      component: ProjectInfoList
    },
    {
      path: '/hello',
      name: 'HelloProjectList',
      component: HelloProjectList
    },
    {
      path: '/inputprojinfo',
      name: 'InputProjInfo',
      component: InputProjInfo
    },
    {
      path: '/',
      redirect: '/projinfolist'
    }
  ]
})
