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
          <div class="buttons-container">
            <RouterLink :to="{name: 'bucket'}">
              <OverlayBadge :value="bucketStore.size" severity="info">
                <img src="@/assets/shopping.svg" class="logo">
              </OverlayBadge>
            </RouterLink>
            <img src="@/assets/user.svg" class="cursor-pointer">
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useBucketStore } from '@/store/Bucket';
import { RouterLink } from 'vue-router'

const bucketStore = useBucketStore()
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

  .buttons-container {
    display: flex;
    gap: 2rem;
    img {
      height:40px;
    }

  }
</style>