<template>
  <div class="quantity-container">
    <Button icon="pi pi-minus" @click="decrease()" severity="danger"/>
    <span>{{ props.quantity }}</span>
    <Button icon="pi pi-plus" @click="emit('add')"/>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  quantity: number
}>()

const emit = defineEmits(['add', 'decrease', 'delete'])

function decrease() {
  if(props.quantity == 1) {
    emit('delete')
  } else {
    emit('decrease')
  }
}
</script>

<style lang="scss" scoped>
.quantity-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: auto;
}
</style>