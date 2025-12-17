<template>
  <div class="flex flex-col">
    <div
      class="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 transition-transform"
      :style="{ color: '#e91e63' }"
    >
      <img :src="require(`@/assets/Expertise/${icon}.svg`)" :alt="title" class="w-6 h-6">
    </div>

    <h3 class="text-lg font-bold text-slate-900 mb-3 text-left">
      {{ title }}
    </h3>

    <p class="text-sm text-slate-500 leading-relaxed text-left">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  description: string
}>();
</script>
