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
import Checkbox from 'primevue/checkbox';
import ConfirmationService from 'primevue/confirmationservice';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Menu from 'primevue/menu';

const app = createApp(App);
const pinia = createPinia()


app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})


app.use(pinia)
app.use(ToastService);
app.use(ConfirmationService);

app.component("Button", Button)
app.component("OverlayBadge", OverlayBadge)
app.component("MultiSelect", MultiSelect)
app.component("InputNumber", InputNumber)
app.component("Checkbox", Checkbox)
app.component("Toast", Toast)
app.component("InputText", InputText)
app.component("FloatLabel", FloatLabel)
app.component("Password", Password)
app.component("Menu", Menu)


app.directive('tooltip', Tooltip)


app.mount('#app');
