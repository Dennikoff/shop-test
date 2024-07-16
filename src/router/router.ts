import { createWebHistory, createRouter } from 'vue-router'

import { useAuthStore } from '@/store/Auth'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home',
      component: () => import('@/views/Home.vue')
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
  const email = localStorage.getItem('email')
  if(email) {
    // is authorized
    if(typeof to.name === 'string' && publicPages.includes(to.name)) 
      next({name: 'home'})
    else {
      next()
    } 
  } else {
    if(typeof to.name === 'string' && publicPages.includes(to.name)) {
      next() 
    }
    else {
      next({name: 'auth.login'})
    } 
  }
})

router.afterEach((to, from, next) => {
  const authStore = useAuthStore()
  const email = localStorage.getItem('email')
  authStore.setAuth(Boolean(email))
})