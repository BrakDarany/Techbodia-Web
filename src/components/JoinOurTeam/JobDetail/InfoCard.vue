<template>
  <section class="w-full max-w-6xl mx-auto">
    <div class="group relative bg-white rounded-xl shadow-md border-t-4 border-pink-500
                p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
      <div class="flex items-center gap-4 border-b border-pink-100 pb-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white">
          <slot name="icon" />
        </div>
        <h2 class="text-2xl font-semibold text-pink-600 mb-3">{{ title }}</h2>
      </div>
      <p class="py-4 text-gray-500 italic">{{ description }}</p>
      <slot />
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
