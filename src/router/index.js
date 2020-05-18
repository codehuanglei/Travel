import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import City from '@/pages/city/City'
Vue.use(Router)
export default new Router({
    routes:[{
         path:'/',
        name:'Home',
        component:Home
        },  {
        path:'/about',
        name:'About',
        component:About 
        },{
            path:'/city',
            name:'City',
            component:City 
            }]
})