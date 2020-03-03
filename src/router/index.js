//import Vue from 'vue'
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Index from '@/components/index'

import home from '@/components/pages/home'
import about from '@/components/pages/about'
import article from '@/components/pages/article'
import archive from '@/components/pages/archive'
import apply from '@/components/pages/apply'

//Vue.use(Router)

const routes = [
/*    {
      path: '/',
      //name: 'HelloWorld',
      name: 'Index',
     // component: HelloWorld
      component: Index
    }*/
    {
      path:'/',
      component:home
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/archive',
      name:'archive',
      component:archive
    },
    {
      path:'/tag/:name',
      name:'tag',
      component:archive
    },
    {
      path:'/article',
      name:'article',
      component:article
    },
    {
      path:'/apply',
      name:'apply',
      component:apply
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
export default routes;
