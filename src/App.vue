<template>
  <ConfirmDialog></ConfirmDialog>
  <Toast/>

  <template v-if="authStore.auth">
    <Nav />
    <div class="content">
      <Suspense>
        <RouterView />
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </template>
  
  <template v-else>
    <RouterView />
  </template>

</template>

<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import ConfirmDialog from "primevue/confirmdialog";
import { useAuthStore } from "./store/Auth";

const authStore = useAuthStore();
</script>

<style scoped></style>
