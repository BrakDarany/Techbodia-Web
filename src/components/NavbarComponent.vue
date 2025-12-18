<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
  >
    <div
      class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
    >
      <div class="flex items-center gap-2 cursor-pointer">
        <img
          class="w-12 h-12 lg:w-14.5 lg:h-14.5"
          src="../assets/Navbar/TB-logo.svg" alt="#">
      </div>

      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          class="text-sm font-medium transition-colors hover:text-[#E91E63]"
          :class="item.active ? 'text-[#E91E63]' : 'text-slate-600'"
        >
          {{ item.label }}
        </button>

        <button
          type="button"
          class="px-6 py-2.5 bg-[#E91E63]
              text-white text-sm font-semibold rounded-full
              hover:bg-pink-600 transition-all shadow-lg shadow-pink-200
              hover:shadow-pink-300 transform hover:-translate-y-0.5"
        >
          Careers Opportunity
        </button>
      </div>

      <button
        type="button"
        class="md:hidden p-2"
        aria-label="Open menu"
      >
        <img src="../assets/Navbar/menu-icon.svg" alt="#" width="28" height="28">
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { id: 'home', label: 'Home', active: true },
  { id: 'services', label: 'Services', active: false },
  { id: 'culture', label: 'Culture', active: false },
  { id: 'about', label: 'About', active: false },
  { id: 'contact', label: 'Contact', active: false },
];
</script>
