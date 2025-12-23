import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/HomePage.vue'),
  },
  {
    path: '/jobs/ViewJobDetail',
    name: 'ViewJobDetail',
    component: () => import('@/components/JoinOurTeam/ViewJobDetail.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      };
    }
    return { top: 0 };
  },
});

export default router;
