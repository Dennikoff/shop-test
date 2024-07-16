<template>
  <div class="form-container">
    <h2>Авторизация</h2>
    <form @submit.prevent="submitForm()" class="mt-7 flex flex-column gap-5">
      <div class="text-left relative">
        <FloatLabel>
          <InputText id="email" v-model="form.email" />
          <label for="email">Почта</label>
        </FloatLabel>
        <small v-if="vForm.email.$errors.length" class="error">{{ vForm.email.$errors[0].$message }}</small>
      </div>
      <div class="text-left relative">
        <FloatLabel>
          <Password
            id="password"
            v-model="form.password"
            toggleMask
            :feedback="false"
          />
          <label for="password">Пароль</label>
        </FloatLabel>
        <small v-if="vForm.password.$errors.length" class="error">{{ vForm.password.$errors[0].$message }}</small>
      </div>

      <Button label="Войти" type="submit" />
    </form>
    <!-- <p>Нет аккаунта?<br>Зарегистрируйтесь</p> -->
  </div>
</template>

<script setup lang="ts">

import { useAuthStore } from "@/store/Auth";
import useVuelidate from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
import { useToast } from "primevue/usetoast";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const form = reactive({ email: "" , password: "" });
const authStore = useAuthStore()
const toast = useToast();

function submitForm() {
  
  vForm.value.$validate().then((validateFlag) => {
    if (validateFlag) authStore.login(form.email)
    else toast.add({ severity: "error", summary: "Ошибка валидации", detail: 'Исправьте ошибки', life: 2000 });
  })
    
}

const rules = {
  email: { required, email, }, // Matches state.firstName
  password: { required, minLengthValue:  minLength(6) }, // Matches state.lastName
};

const vForm = useVuelidate(rules, form);
</script>

<style lang="scss" scoped>
.form-container {
  padding: 4rem;
  border-radius: 8px;
  background-color: $card-background;
  margin: auto;
  text-align: center;
  width: 30%;
  max-width: 500px;
}

.error {
  position: absolute;
  top: 105%;
  color: $error-color;
  left: .5rem;
}
</style>
