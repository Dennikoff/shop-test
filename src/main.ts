import { createApp } from 'vue'
import '@/scss/main.scss'
import App from './App.vue'
import {router} from './router/router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';




const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})


import Button from "primevue/button"

app.component("Button", Button)

app.mount('#app');
