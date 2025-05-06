import { createApp } from 'vue'
import './style.css'
import app from './app.vue'

import PrimeVue from 'primevue/config';

import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';

import 'primeflex/primeflex.css'

createApp(app)
    .use(PrimeVue,{ripple:true,
        theme: {preset:Aura
        }})
    .component("pv-menubar",Menubar)
    .component("pv-togglebutton",ToggleButton)
    .mount('#app')

