import { createApp } from 'vue'
import '@/scss/main.scss'
import App from './App.vue'
import {router} from './router/router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css'



const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})


import Button from "primevue/button";
import OverlayBadge from 'primevue/overlaybadge';
import MultiSelect from 'primevue/multiselect';

app.component("Button", Button)
app.component("OverlayBadge", OverlayBadge)
app.component("MultiSelect", MultiSelect)

app.mount('#app');
