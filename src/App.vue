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

<style>
#navigation {
  flex: 0 0 auto;
}
.content {
  flex: 1 1 100%;
}
</style>
