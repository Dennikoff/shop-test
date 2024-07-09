<script setup lang="ts">
import Nav from '@/components/Nav.vue'

</script>

<template>
  <Nav/>
  <div class="content">
    <RouterView/>
  </div>
  
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
