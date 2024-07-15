<template>
  
  <Toast position="center" group="bc" @close="modalClose()">
    <template #message="slotProps">
      <div class="flex flex-column items-start flex-auto pl-4 pr-2 py-4 text-center">
        <h3>{{ slotProps.message.summary }}</h3>
        <div class="font-medium text-lg my-4">
          {{ slotProps.message.detail }}
        </div>
        <Button
          class="mx-auto mt-5"
          label="Закрыть"
          severity="success"
          @click="toast.removeGroup('bc')"
        ></Button>
      </div>
    </template>
  </Toast>

  <div class="content-container">
    <div class="bucket-container">
      <template v-if="bucketStore.size > 0">
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
                    @decrease="bucketStore.decrease(item.product.id)"
                    @delete="deleteItem(item.product.id)"
                  />
                </td>
                <td>{{ item.product.price }}&#36;</td>
                <td>
                  {{ (item.product.price * item.quantity).toFixed(2) }}&#36;
                </td>
                <td>
                  <i
                    class="pi pi-trash cursor-pointer"
                    @click="deleteItem(item.product.id)"
                    style="color: red"
                  ></i>
                </td>
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
        <div class="bucket-footer">
          <h2>
            Итого заказ на
            <span style="color: green">{{ bucketStore.price }} &#36;</span>
          </h2>
          <Button label="Оформить заказ" @click="showModal()"/>
        </div>
      </template>
      <div v-else class="bucket-empty">
        <h1>Корзина пуста</h1>
        <Button
          class="mt-3"
          label="Вернуться к покупкам"
          @click="returnToMain()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBucketStore } from "@/store";
import QuantityButtons from "@/components/QuantityButtons.vue";
import { useBucketDeleting } from "@/composable/bucketDeleting";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const deleteItem = useBucketDeleting();
const router = useRouter();
const bucketStore = useBucketStore();
const toast = useToast()


function returnToMain() {
  router.push({ name: "home" });
}

function showModal() {
  toast.removeGroup('bc');  
  toast.add({group: 'bc', summary: 'Заказ № 1', detail: 'Ваш заказ успешно оформлен', severity: 'secondary' })
}

function modalClose() {
  console.log('close')
}

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

.bucket-footer {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.bucket-empty {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
