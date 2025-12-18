<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
  >
    <div
      class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
    >
      <div class="flex items-center gap-2 cursor-pointer" @click="scrollToSection('digital-future')">
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
          :class="activeSection === item.id ? 'text-[#E91E63]' : 'text-slate-600'"
          @click="scrollToSection(item.sectionId)"
        >
          {{ item.label }}
        </button>

        <button
          type="button"
          class="px-6 py-2.5 bg-[#E91E63]
              text-white text-sm font-semibold rounded-full
              hover:bg-pink-600 transition-all shadow-lg shadow-pink-200
              hover:shadow-pink-300 transform hover:-translate-y-0.5"
          @click="scrollToSection('join-our-team')"
        >
          Careers Opportunity
        </button>
      </div>

      <button
        type="button"
        class="md:hidden p-2"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <img
          v-if="!isMobileMenuOpen"
          src="../assets/Navbar/menu-icon.svg"
          alt="#"
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

    <div
      v-if="isMobileMenuOpen"
      class="fixed top-20 left-0 right-0 bg-white z-40 md:hidden shadow-lg"
    >
      <div class="p-6 flex flex-col gap-6">
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          class="text-left text-base font-medium transition-colors hover:text-[#E91E63] py-1"
          :class="activeSection === item.id ? 'text-[#E91E63]' : 'text-slate-700'"
          @click="scrollToSection(item.sectionId); isMobileMenuOpen = false"
        >
          {{ item.label }}
        </button>

        <button
          type="button"
          class="mt-2 w-full px-6 py-3 bg-[#E91E63]
              text-white text-base font-semibold rounded-md
              hover:bg-pink-600 transition-all shadow-lg shadow-pink-200"
          @click="scrollToSection('join-our-team'); isMobileMenuOpen = false"
        >
          Careers Opportunity
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const navItems = [
  { id: 'home', label: 'Home', sectionId: 'digital-future' },
  { id: 'services', label: 'Services', sectionId: 'expertise' },
  { id: 'culture', label: 'Culture', sectionId: 'passion-and-fun' },
  { id: 'about', label: 'About', sectionId: 'about-us' },
  { id: 'contact', label: 'Contact', sectionId: 'contact-us' },
];

const activeSection = ref('home');
const isMobileMenuOpen = ref(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  const sections = navItems.map((item) => ({
    id: item.id,
    element: document.getElementById(item.sectionId),
  }));

  const scrollPosition = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i -= 1) {
    const { id, element } = sections[i];
    if (element) {
      const { offsetTop } = element;
      if (scrollPosition >= offsetTop) {
        activeSection.value = id;
        return;
      }
    }
  }

  activeSection.value = 'home';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
