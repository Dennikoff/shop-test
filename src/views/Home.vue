<template>
  <div class="main-page flex">
    <div class="filter-container w-5">
      <ProductFilter :minPrice="productStore.minPrice" :maxPrice="productStore.maxPrice" :cats="productStore.cats" @apply="applyFilter"/>
    </div>
    <div class="products-container w-7">
      <ProductList :filters="filter"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductFilter from '@/components/ProductFilter.vue'
import { useProductStore } from '@/store/Product';
import ProductList from '@/components/ProductList.vue'
import { Filter } from '@/interface';
import { ref } from 'vue';
let productStore = useProductStore()

await productStore.loadData()

const filter = ref<Filter>()

function applyFilter(filterValue: Filter) {
  filter.value = filterValue
}

</script>

<style lang="scss" scoped>

.main-page {
  height: 100%;
}

.filter-container {
  height: 100%;
  width: 40%;
  border-right: 1px solid $border-color;
}
</style>
