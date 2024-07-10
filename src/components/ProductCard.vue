<template>
  <div class="card-container">
    <div class="header">

    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import type {Product} from '@/interface'

const props = defineProps<{
  product: Product
}>()

</script>

<style lang="scss" scoped>

.card-container {
  width: 90%;
  height: 200px;
  border-radius: 8px;
  border: $border-color;
}

</style>