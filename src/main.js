import { createApp } from 'vue'
import './style.css'
import app from './app.vue'
import i18n from "./i18n.js";

import PrimeVue from 'primevue/config';

import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';

import 'primeflex/primeflex.css'
import {SelectButton} from "primevue";

createApp(app)
    .use(PrimeVue,{ripple:true,
        theme: {preset:Aura
        }})
    .use(i18n)
    .component("pv-menubar",Menubar)
    .component("pv-togglebutton",ToggleButton)
    .component("pv-select-button",SelectButton)
    .mount('#app')



