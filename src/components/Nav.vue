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
            <img src="@/assets/user.svg" class="cursor-pointer" @click="toggle">
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/Auth';
import { useBucketStore } from '@/store/Bucket';
import { ref } from 'vue';
import { RouterLink } from 'vue-router'


const authStore = useAuthStore()
const bucketStore = useBucketStore()
const menu = ref();
const items = ref([
    {
        label: String(localStorage.getItem('email')),
        items: [
            {
                label: 'Выйти',
                icon: 'pi pi-sign-out',
                command: () => authStore.logout()
            },
            {
                label: 'GitHub',
                icon: 'pi pi-github',
                command: () => window.open('https://github.com/Dennikoff/shop-test')
            },
        ]
    }
]);

const toggle = (event: any) => {
    menu.value.toggle(event);
};
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