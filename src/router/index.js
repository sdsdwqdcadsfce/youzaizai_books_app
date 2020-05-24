import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/ebook'
    },
    {
      // 1.新建父组件
      // 2.将父组件加到路由中
      //   2.1 父组件中加入 组件试图
      //   2.2 导入组件
      // 3.将子组件加载children中
      path: '/ebook',
      component:()=>import('../views/ebook/index.vue'),
      children:[
        {
          // 动态路由 参数值会被设置到 this.$route.params，可以在每个组件内使用
          path:':fileName',
          component:()=>import('../components/ebook/ebookReader.vue'),
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
