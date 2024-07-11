<template>
  <div class="content-container">
    <div class="bucket-container">
      <h1>Корзина</h1>
      <table class="bucket-table">
        <thead>
          <tr>
            <th></th>
            <th>№</th>
            <th>Наименование товара</th>
            <th>Количество</th>
            <th>Цена за ед.</th>
            <th>Итого</th>
          </tr>
          <tr>
            <td></td>
            <td colspan="5">
              <hr>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Checkbox/></td>
            <td>1</td>
            <td>Лыжи</td>
            <td>2</td>
            <td>500</td>
            <td>1000</td>
          </tr>
          <tr>
            <td></td>
            <td colspan="5">
              <hr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bucket-container {
  margin-top: 4rem;
}

.bucket-table {
  width: 100%;
  margin-top: 2rem;

  td {
    text-align: center;
    vertical-align: center;
  }
  tbody hr {
    border-bottom: 0;
    width: 90%;
  }
}
</style>
