<template>
  <div class="main-page">
    <div class="filter-container">
      <ProductFilter :minPrice="productStore.minPrice" :maxPrice="productStore.maxPrice" :cats="productStore.cats"/>
    </div>
    <div class="products-container"></div>
  </div>
</template>

<script setup lang="ts">
import ProductFilter from '@/components/ProductFilter.vue'
import { useProductStore } from '@/store/Product';

let productStore = useProductStore()


</script>

<style lang="scss" scoped>

.main-page {
  border: 1px solid #888;
  height: 100%;
}

.filter-container {
  width: 40%;
  height: 100%;
  border-right: 1px solid #888;
}
</style>
