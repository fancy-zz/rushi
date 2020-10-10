import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    // 重定向
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:()=>import('../views/Index.vue'),
      children:[
        {
          path:'/works',
          component:()=>import('../views/Works.vue')
        },
        {
          path:'/strict',
          component:()=>import('../views/Strict.vue')
        },
        {
          path:'/learn',
          component:()=>import('../views/Learn.vue')
        },
        {
          path:'/favorites',
          component:()=>import('../views/Favorites.vue')
        },
        {
          path:'/mine',
          component:()=>import('../views/Mine.vue')
        },
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
