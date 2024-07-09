<template>
  <nav id="navigation">
    <div class="wrapper nav">
      <ul class="nav-list">
        <li class="nav-item">
          <RouterLink :to="{name: 'home'}">
            <img src="@/assets/logo.svg" class="logo">
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name: 'bucket'}">
            <img src="@/assets/shopping.svg" class="logo">
          </RouterLink>
        </li>
      </ul>
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

  .nav-list {
    display: flex;
    justify-content: space-between;
  }
</style>