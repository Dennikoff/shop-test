import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<Boolean>()
  const router = useRouter()
  
  
  function login(email: string) {
    auth.value = true
    localStorage.setItem('email', email)
    router.push({name: 'home'})
  }

  function logout() {
    auth.value = false
    localStorage.removeItem('email')
    router.push({name: 'auth.login'})
  }

  return {auth, login, logout}
})