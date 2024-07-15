import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<Boolean>()

  return {auth}
})