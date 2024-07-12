<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import ConfirmDialog from 'primevue/confirmdialog';
</script>

<template>
  <Nav />
  <ConfirmDialog></ConfirmDialog>
  <div class="content">
    <Suspense>
      <RouterView />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
