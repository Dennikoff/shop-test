<template>
  <div class="content-container">
    <div class="bucket-container">
      <h1>Корзина</h1>
      <table class="bucket-table">
        <thead>
          <tr>
            <th style="width: 5%"></th>
            <th style="width: 5%">№</th>
            <th style="width: auto">Наименование товара</th>
            <th style="width: 20%">Количество</th>
            <th style="width: 10%">Цена за ед.</th>
            <th style="width: 10%">Итого</th>
            <th style="width: 5%"></th>
          </tr>
          <tr>
            <td></td>
            <td colspan="5">
              <hr />
            </td>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(item, index) in bucketStore.bucket"
            :key="item.product.id"
          >
            <tr>
              <td><Checkbox v-model="item.selected" :binary="true" /></td>
              <td>{{ index + 1 }}</td>
              <td>{{ item.product.title }}</td>
              <td style="display: flex">
                <QuantityButtons
                  :quantity="item.quantity"
                  @add="bucketStore.add(item.product)"
                  @remove="bucketStore.decrease(item.product.id)"
                />
              </td>
              <td>{{ item.product.price }}&#36;</td>
              <td>{{ (item.product.price * item.quantity).toFixed(2) }}&#36;</td>
              <td><i class="pi pi-trash cursor-pointer" @click="bucketStore.deleteItem(item.product.id)" style="color: red"></i></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="5">
                <hr />
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBucketStore } from "@/store";
import QuantityButtons from "@/components/QuantityButtons.vue";


const bucketStore = useBucketStore();
</script>

<style lang="scss" scoped>
.bucket-container {
  margin-top: 4rem;
}

.bucket-table {
  width: 100%;
  margin-top: 2rem;
  table-layout: fixed;

  td {
    text-align: center;
    vertical-align: center;
    overflow: hidden;
  }

  tbody hr {
    border-bottom: 0;
    width: 90%;
  }
}
</style>
