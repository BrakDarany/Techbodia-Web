<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <div
        class="flex items-center gap-2 cursor-pointer"
        @click="goTo('#digital-future')"
      >
        <img
          class="w-12 h-12 lg:w-14.5 lg:h-14.5"
          src="../assets/Navbar/TB-logo.svg"
          alt="logo"
        >
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          class="text-sm font-medium transition-colors hover:text-[#E91E63]"
          :class="activeSection === item.id
            ? 'text-[#E91E63]'
            : 'text-slate-600'"
          @click="goTo(item.hash)"
        >
          {{ item.label }}
        </button>

        <button
          type="button"
          class="btn-primary btn-shadow btn-round btn-hover-lift"
          @click="goTo('#join-our-team')"
        >
          Careers Opportunity
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button
        type="button"
        class="md:hidden p-2"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <img
          v-if="!isMobileMenuOpen"
          src="../assets/Navbar/menu-icon.svg"
          alt="menu"
          width="28"
          height="28"
        >
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed top-20 left-0 right-0 bg-white z-40 md:hidden shadow-lg"
    >
      <div class="p-6 flex flex-col gap-6">
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          class="text-left text-base font-medium transition-colors hover:text-[#E91E63]"
          :class="activeSection === item.id
            ? 'text-[#E91E63]'
            : 'text-slate-700'"
          @click="goTo(item.hash)"
        >
          {{ item.label }}
        </button>

        <button
          type="button"
          class="mt-2 w-full btn-primary btn-rounded"
          @click="goTo('#join-our-team')"
        >
          Careers Opportunity
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isMobileMenuOpen = ref(false);

const navItems = [
  { id: 'home', label: 'Home', hash: '#digital-future' },
  { id: 'services', label: 'Services', hash: '#expertise' },
  { id: 'culture', label: 'Culture', hash: '#passion-and-fun' },
  { id: 'about', label: 'About', hash: '#about-us' },
  { id: 'contact', label: 'Contact', hash: '#contact-us' },
];

const activeSection = computed(() => navItems.find((item) => item.hash === route.hash)?.id ?? 'home');

const goTo = (hash: string) => {
  router.push({ path: '/', hash });
  isMobileMenuOpen.value = false;
};
</script>
