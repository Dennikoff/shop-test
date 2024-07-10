<template>
  <div class="card-container">
    <div class="card-image__container">
      <img :src="props.product.image" class="card-image" />
    </div>
    <h4 class="card-title" v-tooltip.top="product.title">{{ product.title }}</h4>
    <p class="card-price">
      {{ product.price }} &#36;
    </p>
    <Button 
      v-if="!cartStore.includes(props.product.id)"
      label="Добавить в карзину" 
      @click="() => addToCart(props.product)" 
      fluid
    />
    <Button 
      v-else
      label="Убрать из корзины" 
      @click="() => removeFromCart(props.product)" 
      severity="danger"
      fluid
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/interface";
import { useCartStore } from "@/store/Cart";

const cartStore = useCartStore()

const props = defineProps<{
  product: Product;
}>();

function addToCart(product: Product) {
  cartStore.add(product)
}

function removeFromCart(product: Product) {
  cartStore.remove(product.id)
}
</script>

<style lang="scss" scoped>
.card {
  &-container {
    width: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 0.5rem;
  }

  &-image {
    object-fit: contain;
    width: 100%;
    height: 100%;


    &__container {
      max-width: 80%;
      height: auto;
      // margin-inline: auto;
      margin: auto;
    }
  }
  &-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &-price {
    color: green;
    font-weight: 700;
    font-size: 1.15em;
  }
}
</style>
