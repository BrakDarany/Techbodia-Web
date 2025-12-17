<template>
  <div
    class="fixed top-0 left-0 right-0 w-full z-1000
      shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white flex
      justify-between px-6 py-3 lg:justify-around lg:py-1"
  >
    <img
      class="h-12 w-12 lg:h-18 lg:w-18"
      src="../assets/Navbar/TB-logo.svg"
      alt="#"
    >

    <div
      class="hidden lg:flex flex-row justify-end items-center
        gap-7 text-sm font-medium text-slate-600
        transition-colors duration-500"
    >
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        :class="[
          'transition-colors duration-300',
          $route.path === link.path
            ? 'text-rose-500 font-semibold'
            : 'hover:text-rose-500'
        ]"
      >
        {{ link.label }}
      </router-link>
      <button
        @click="goToCareer"
        class="bg-rose-500 text-white text-sm font-semibold
          rounded-full px-6 py-2.5 transition-all duration-300
          shadow-[0_4px_15px_-4px_rgba(255,21,132,0.6)]
          hover:shadow-[0_8px_25px_-4px_rgba(255,21,132,0.6)]
          hover:-translate-y-0.5"
      >
        Careers Opportunity
      </button>
    </div>

    <img
      class="block lg:hidden"
      src="../assets/Navbar/menu-icon.svg"
      alt="#"
      width="26"
      height="26"
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/how-we-work', label: 'Services' },
  { path: '/about', label: 'Culture' },
  { path: '/about-us', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const goToCareer = () => {
  router.push('/career');
};
</script>
