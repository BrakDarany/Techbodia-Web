<template>
  <section class="w-full max-w-6xl mx-auto">
    <div class="group relative bg-white rounded-xl shadow-md border-t-4 border-pink-500
                p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
      <div class="flex items-center gap-4 border-b border-pink-100 pb-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white">
          <slot name="icon" />
        </div>
        <span class="text-xl-primary-bold transition-colors duration-300 group-hover:text-pink-500">{{ title }}</span>
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
