<template>
  <ConfirmDialog></ConfirmDialog>
  <Toast />
  <template v-if="authStore.auth">
    <Nav />
    <Suspense>
      <RouterView class="content"/>
      <template #fallback> Loading... </template>
    </Suspense>
  </template>
  <RouterView v-else/>

</template>

<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import ConfirmDialog from "primevue/confirmdialog";
import { useAuthStore } from "./store/Auth";

const authStore = useAuthStore();
</script>

<style scoped>

.content {
  height: calc(100% - 110px)
}

</style>
