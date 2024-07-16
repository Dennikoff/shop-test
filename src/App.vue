<template>
  <ConfirmDialog></ConfirmDialog>
  <Toast />
  <template v-if="authStore.auth">
    <Nav />
    <Suspense>
      <RouterView />
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

<style scoped></style>
