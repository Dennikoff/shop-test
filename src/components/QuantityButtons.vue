<template>
  <div class="quantity-container">
    <Button icon="pi pi-minus" @click="emit('remove')" severity="danger"/>
    <span>{{ props.quantity }}</span>
    <Button icon="pi pi-plus" @click="emit('add')"/>
  </div>
</template>

<script setup lang="ts">
import { emit } from 'process';

const props = defineProps<{
  quantity: number
}>()

const emit = defineEmits(['add', 'remove'])
</script>

<style lang="scss" scoped>
.quantity-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: auto;
}
</style>