<template>
  <ul class="grid grid-nogutter">
    <li class="col-12 md:col-6 lg:col-4 xl:col-3 py-3 flex justify-content-center" v-for="product in productStore.productList" :key="product.id">
      <ProductCard :product="product"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store';
import ProductCard from './ProductCard.vue';

const productStore = useProductStore()

</script>

<style scoped>

</style>