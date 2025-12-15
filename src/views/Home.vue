<template>
  <div>
    <Navbar />
    <div
      class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">
          Hello World
        </h1>
        <p class="text-xl text-gray-600">
          Built with Vue 3 and Tailwind CSS
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>
