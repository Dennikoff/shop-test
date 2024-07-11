<template>
  <div class="quantity-container">
    <Button icon="pi pi-minus"/>
    <span>{{ props.quantity }}</span>
    <Button icon="pi pi-plus"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  quantity: number
}>()
</script>

<style lang="scss" scoped>
.quantity-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: auto;
}
</style>