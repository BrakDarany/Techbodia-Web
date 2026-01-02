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
        path: 'job-detail/:jobTitle',
        name: 'ViewJobDetail',
        component: ViewJobDetail,
        props: true,
      },
    ],
  },
];

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
