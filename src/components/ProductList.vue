<template>
  <ul class="grid grid-nogutter">
    <li class="col-12 md:col-6 lg:col-4 xl:col-3 py-3 flex justify-content-center" v-for="product in filtredList" :key="product.id">
      <ProductCard :product="product"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store';
import ProductCard from './ProductCard.vue';
import { computed } from 'vue';
import { Filter } from '@/interface/Filter';

const productStore = useProductStore()

const props = defineProps<{
  filters?: Filter
}>()

const filtredList = computed(() => {
  let tempList = productStore.productList
  if(props.filters) {
    // @ts-ignore
    tempList = tempList.filter((val) => val.price > props.filters.minPrice && val.price < props.filters.maxPrice)
    tempList = tempList.filter((val) => props.filters?.selectedCats.includes(val.category))
  }
  

  return tempList
})

</script>

<style scoped>

</style>