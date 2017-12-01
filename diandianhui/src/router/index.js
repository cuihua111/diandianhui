import Vue from 'vue'
import Router from 'vue-router'
import memberManagement from 'components/memberManagement/memberManagement'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'memberManagement',
      component: memberManagement
    },
    {
      path: '/memberManagement',
      name: 'memberManagement',
      component: memberManagement
    }
  ]
})
