import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Bucket from '@/views/Bucket.vue'

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
      component: Bucket
    },
  ],
})