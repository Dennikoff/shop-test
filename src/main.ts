import { createApp } from 'vue'
import '@/scss/main.scss'
import App from './App.vue'
import {router} from './router/router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css'
import { createPinia } from 'pinia';


import Button from "primevue/button";
import OverlayBadge from 'primevue/overlaybadge';
import MultiSelect from 'primevue/multiselect';
import InputNumber from 'primevue/inputnumber';
import Tooltip from 'primevue/tooltip';



const app = createApp(App);
const pinia = createPinia()


app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(pinia)


app.component("Button", Button)
app.component("OverlayBadge", OverlayBadge)
app.component("MultiSelect", MultiSelect)
app.component("InputNumber", InputNumber)
app.directive('tooltip', Tooltip);

app.mount('#app');
