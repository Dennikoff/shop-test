import { Product } from "@/interface"
import { Bucket } from "@/interface"
import { defineStore } from "pinia"
import {  computed, ref } from "vue"


export const useBucketStore = defineStore('bucket', () => {
  const bucket = ref<Bucket[]>([])
  
  const size = computed(() => {
    return bucket.value.length
  }) 

  function add(product: Product) {
    let flagUnique = true
    bucket.value = bucket.value.map((val) => {
      if(val.product.id != product.id) {
        return val
      }
      flagUnique = false;
      val.quantity += 1;
      return val
    })
    
    if(flagUnique) {
      bucket.value.push({
        product: product,
        quantity: 1,
        selected: false,
      })
    }
    return bucket.value
  }

  function decrease(id: number) {
    bucket.value = bucket.value.map((val) => {
      if(val.product.id == id) {
        val.quantity -= 1;
      }
      return val
    }).filter((val) => val.quantity > 0)
    return bucket.value
  }
  
  function deleteItem(id: number) {
    bucket.value = bucket.value.filter((val) => val.product.id != id)
    return bucket.value
  }

  function getQuantity(id: number) {
    return bucket.value.find((val) => val.product.id == id)?.quantity || 0
  }

  function includes(id: number) {
    return bucket.value.some((val) => val.product.id == id )
  }

  return {bucket, add, decrease, deleteItem, getQuantity, includes, size}
})