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

const publicPages = [
  'auth.login'
]

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const email = localStorage.getItem('email')
  if(email) {
    // is authorized
    authStore.auth = true
    if(typeof to.name === 'string' && publicPages.includes(to.name)) 
      next({name: 'home'})
    else {
      next()
    } 
  } else {
    authStore.auth = false
    if(typeof to.name === 'string' && publicPages.includes(to.name)) 
      next()
    else {
      next({name: 'auth.login'})
    } 
  }
})