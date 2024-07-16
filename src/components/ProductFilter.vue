<template>
  <div class="filter">
    <h2>Фильтры</h2>
    <div class="cat-container mt-5">
      <h3>Категория</h3>
      <MultiSelect 
        class="multiselect mt-3"
        v-model="filter.selectedCats" 
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
            <InputNumber v-model="filter.minPrice" inputId="min-price" fluid :min="props.minPrice" :max="filter.maxPrice"  />
          </div>
        </li>
        <li class="col max-price">
          <div class="flex-auto">
            <label for="max-price" class="block mb-2">
              <span class="font-bold">Макс. цена</span> 
              ({{ props.maxPrice }}) 
            </label>
            <InputNumber v-model="filter.maxPrice" inputId="max-price" fluid  :min="filter.minPrice" :max="props.maxPrice"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="control-container">
      <Button label="Сброс" severity="warn" @click="resetFilters"/>
      <Button label="Применить" @click="applyFilters"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Filter } from '@/interface/Filter';
import { reactive, watch} from 'vue'

const props = defineProps<{
  minPrice: number,
  maxPrice: number,
  cats: string[],
}>()

const emit = defineEmits(['apply'])

const filter = reactive<Filter>({
  minPrice: props.minPrice,
  maxPrice: props.maxPrice,
  selectedCats: props.cats,
})



function resetFilters() {
  filter.selectedCats = props.cats
  filter.minPrice = props.minPrice
  filter.maxPrice = props.maxPrice
  emit('apply')
}

function applyFilters() {
  emit('apply', {...filter})
}

watch(() => filter.minPrice, () => {
  if(filter.minPrice == undefined) {
    filter.minPrice = props.minPrice
  }
})

watch(() => filter.maxPrice, () => {
  if(filter.maxPrice == undefined) {
    filter.maxPrice = props.maxPrice
  }
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