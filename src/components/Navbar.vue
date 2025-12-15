<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="bg-pink-500 rounded-lg px-3 py-1 w-12 h-12 flex items-center justify-center">
          <span class="text-white font-bold text-lg">TB</span>
        </div>
        <span class="text-black font-bold text-lg">Techbodia</span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <router-link
          to="/"
          class="text-gray-700 hover:text-pink-500 transition-colors font-medium"
          active-class="text-pink-500"
        >
          Home
        </router-link>
        <router-link
          to="/services"
          class="text-gray-700 hover:text-pink-500 transition-colors font-medium"
          active-class="text-pink-500"
        >
          Services
        </router-link>
        <router-link
          to="/culture"
          class="text-gray-700 hover:text-pink-500 transition-colors font-medium"
          active-class="text-pink-500"
        >
          Culture
        </router-link>
        <router-link
          to="/about"
          class="text-gray-700 hover:text-pink-500 transition-colors font-medium"
          active-class="text-pink-500"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="text-gray-700 hover:text-pink-500 transition-colors font-medium"
          active-class="text-pink-500"
        >
          Contact
        </router-link>
      </div>

      <!-- CTA Button -->
      <router-link
        to="/careers"
        class="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors font-medium"
      >
        Careers Opportunity
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
