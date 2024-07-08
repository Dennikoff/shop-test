<template>
  <nav id="navigation">
    <div class="wrapper">
      <RouterLink :to="{}">
        <img src="@/assets/logo.svg" class="logo">
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
  .wrapper {
    padding: 2rem;
    background: black;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
  }
  
  .logo {
    height: 40px;
  }
</style>