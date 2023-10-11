import {createApp} from 'vue'

import router from './routes';
import store from './store';
// import io from './utils/socket';
import App from './App.vue';

import {mask} from '@/utils/mask';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
    .use(router).use(store).use(VueSweetalert2)
    // .use(io(store))
    .mixin(mask)
    .mount('#app')
