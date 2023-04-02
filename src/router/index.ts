import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

// import Home from '@/components/HelloWorld.vue'
import Test from '@/views/Test.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
