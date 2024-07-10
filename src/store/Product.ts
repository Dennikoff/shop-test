import { getProducts } from "@/api/product"
import { Product } from "@/interface"
import { defineStore } from "pinia"
import { computed, ref } from "vue"


export const useProductStore = defineStore('product', () => {
  const productList = ref<Product[]>([])
  
  
  async function loadData() {
    productList.value = await getProducts()
  }

  const cats = computed(() => {
    let catList: string[] = []
    
    for(let product of productList.value){
      if(!(product.category in catList)) {
        catList.push(product.category)
      }
    }

    return catList
  })

  const minPrice = computed(() => {
    let tempMinPrice; 
    for(let product of productList.value){
      if(!tempMinPrice || product.price < tempMinPrice) {
        tempMinPrice = product.price
      }
    }
    return tempMinPrice || 0
  })

  const maxPrice = computed(() => {
    let tempMaxPrice; 
    for(let product of productList.value){
      if(!tempMaxPrice || product.price > tempMaxPrice) {
        tempMaxPrice = product.price
      }
    }
    return tempMaxPrice || 0
  })

  return { productList, loadData, cats, minPrice, maxPrice }
})