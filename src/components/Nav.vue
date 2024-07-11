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
            <OverlayBadge :value="cartStore.size" severity="info">
              <img src="@/assets/shopping.svg" class="logo">
            </OverlayBadge>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/Cart';
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 2rem;
    background: $nav-color;
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
    align-items: center;
  }
</style>