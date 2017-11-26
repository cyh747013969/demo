import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'
import ERROR from '@/components/Error'
import Store from '@/components/Counter'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/test',
      name: 'Test',
      component: Test,
      alias:'/abc',
      // beforeEnter:(to,form,next)=>{
      //   console.log(to);
      //   console.log(from);
      //   next();
      // },
      children:
      [
        {
          //主路由需要加/，而子路由不需要加/
        path:'test1',
        name:'test1',
        component:Test1
        },{
        path:'test2',
        name:'test2',
        component:Test2
        }
      ]
    },
    {
      path:'/testurl/:userId(\\d+)/:userName',
      name:'testurl',
      component:TestUrl,
    },
    {
      path:'/home',
      redirect:'/',
    },
    {
      path:'/home2/:userId(\\d+)/:userName',
      redirect:'/testurl/:userId(\\d+)/:userName',
    },
    {
      path:'*',
      component:ERROR
    },
    {
      path:'/store',
      name:'store',
      component:Store
    }
  ]
})
