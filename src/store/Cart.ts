import { Product } from "@/interface"
import { defineStore } from "pinia"
import {  computed, ref } from "vue"


export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])
  
  function add(product: Product) {
    cart.value.push(product)
    return cart
  }

  function remove(id: number) {
    cart.value = cart.value.filter((val) => val.id !== id)
    return cart
  }
  
  function includes(id: number) {
    return cart.value.some((val) => val.id == id )
  }

  const size = computed(() => {
    return cart.value.length
  }) 

  return {cart, add, remove, includes, size}
})