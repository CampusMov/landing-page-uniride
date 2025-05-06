import { createApp } from 'vue'
import './style.css'
import app from './app.vue'

import PrimeVue from 'primevue/config';

import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar';

createApp(app)
    .use(PrimeVue,{ripple:true,
        theme: {preset:Aura
        }})
    .component("pv-menubar",Menubar)
    .mount('#app')

