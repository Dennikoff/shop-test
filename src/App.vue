<template>
  <Nav/>
  <ConfirmDialog></ConfirmDialog>
  <div class="content">
    <Suspense>
      <RouterView />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/Nav.vue";

</script>

<style scoped>
</style>
