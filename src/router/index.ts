import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import HomePage from '@/views/HomePage.vue';
import ViewJobDetail from '@/components/JoinOurTeam/ViewJobDetail.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
      },
      {
        path: 'job-detail',
        name: 'ViewJobDetail',
        component: ViewJobDetail,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          resolve({ el: to.hash });
        }, 100);
      });
    }
    return { top: 0 };
  },
});
