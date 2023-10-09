import {createApp} from 'vue'

import router from './routes';
import store from './store';
// import io from './utils/socket';
import App from './App.vue';

import {mask} from '@/utils/mask';


createApp(App)
    .use(router).use(store)
    // .use(io(store))
    .mixin(mask)
    .mount('#app')
