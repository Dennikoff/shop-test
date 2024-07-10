<template>
  <div class="filter">
    <h2>Фильтры</h2>
    <div class="cat-container mt-5">
      <h3>Категория</h3>
      <MultiSelect 
        class="multiselect mt-3"
        v-model="selectedOptions" 
        :options="props.cats" 
        :maxSelectedLabels="2"
        placeholder="Выбрать категорию"
      />
    </div>
    <div class="price-container mt-5">
      <ul class="grid">
        <li class="col min-price">
          <div class="flex-auto">
            <label for="min-price" class="block mb-2"> 
              <span class="font-bold">Мин. цена </span> 
              ({{ props.minPrice }}) 
            </label>
            <InputNumber v-model="minPrice" inputId="min-price" fluid :min="props.minPrice" :max="maxPrice"  />
          </div>
        </li>
        <li class="col max-price">
          <div class="flex-auto">
            <label for="max-price" class="block mb-2">
              <span class="font-bold">Макс. цена</span> 
              ({{ props.maxPrice }}) 
            </label>
            <InputNumber v-model="maxPrice" inputId="max-price" fluid  :min="minPrice" :max="props.maxPrice"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="control-container">
      <Button label="Сброс" severity="warn" @click="resetFilters"/>
      <Button label="Применить"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'

const props = defineProps<{
  minPrice: number,
  maxPrice: number,
  cats: string[],
}>()


const selectedOptions = ref()

const minPrice = ref()
const maxPrice = ref()


function resetFilters() {
  selectedOptions.value = []
  minPrice.value = props.minPrice
  maxPrice.value = props.maxPrice
}

watch(() => minPrice.value, () => {
  if(minPrice.value == undefined) {
    minPrice.value = props.minPrice
  }
})

watch(() => maxPrice.value, () => {
  if(maxPrice.value == undefined) {
    maxPrice.value = props.maxPrice
  }
})

onMounted(() => {
  minPrice.value = props.minPrice
  maxPrice.value = props.maxPrice
})


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

  .control-container {
    margin-top: 2rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>