import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<Boolean>(false)
  const router = useRouter()
  
  
  function login(email: string) {
    localStorage.setItem('email', email)
    router.push({name: 'home'})
  }

  function logout() {
    localStorage.removeItem('email')
    router.push({name: 'auth.login'})
  }

  function setAuth(newVal: boolean) {
    auth.value = newVal
  }

  return {auth, login, logout, setAuth}
})