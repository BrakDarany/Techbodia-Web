// eslint-disable-next-line import/no-extraneous-dependencies
import AOS from 'aos';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/shared.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
