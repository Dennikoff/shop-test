<template>
  <div class="main-page">
    <div class="filter-container">
      <ProductFilter :min="10" :max="255" :cats="[`man's clothes`, 'electronics', 'shooes']"/>
    </div>
    <div class="products-container"></div>
  </div>
</template>

<script setup lang="ts">
import ProductFilter from '@/components/ProductFilter.vue'
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
