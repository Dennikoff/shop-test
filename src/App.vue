<script setup lang="ts">
import Nav from "@/components/Nav.vue";
</script>

<template>
  <Nav />
  <div class="content">
    <Suspense>
      <RouterView />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
