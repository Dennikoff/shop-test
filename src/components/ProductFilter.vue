<template>
  <div class="filter">
    <h2>Фильтры</h2>
    <div class="cat-container mt-4">
      <h3>Категория</h3>
      <MultiSelect 
        class="multiselect mt-3"
        v-model="selectedOptions" 
        :options="filterItems" 
        optionLabel="label" 
        optionValue="value" 
        :maxSelectedLabels="2"
        placeholder="Выбрать категорию"
      />
    </div>
    <div class="price-container mt-4">
      <h3>Цена</h3>
      <ul class="prices">
        <li class="min-price">
          
        </li>
        <li class="max-price">

        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const filterItems = [
  { label: 'Кроссовки', value: 'sneakers' },
  { label: 'Cat2', value: 'cat-2' },
];

const selectedOptions = ref()

</script>

<style lang="scss" scoped>
  .filter {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cat-container {
    width: 100%;
    .multiselect {
      width: 100%;
      
    }
  }

  .price-container {
    width: 100%;
  }
</style>