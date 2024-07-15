import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import { useAuthStore } from '@/store/Auth'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home',
      component: Home 
    },
    { 
      path: '/bucket', 
      name: 'bucket',
      component: () => import('@/views/Bucket.vue')
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('@/views/Authorization.vue')
    },
  ],
})



router.afterEach(() => {
  const authStore = useAuthStore()
  
})