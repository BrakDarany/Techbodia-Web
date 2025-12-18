<template>
  <div class="flex items-center gap-4">
    <div class="bg-pink-100 w-12 h-12 rounded-3xl flex
      items-center justify-center">
      <img :src="require(`@/assets/ContactUs/${icon}.svg`)" :alt="title" width="18" height="18">
    </div>
    <div>
      <p class="font-semibold text-gray-900">{{ title }}</p>
      <slot>
        <a v-if="link" :href="link" target="_blank" class="text-gray-600 hover:text-pink-600 transition-colors duration-300">{{ value }}</a>
        <p v-else class="text-gray-600 hover:text-pink-600">{{ value }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  value: String,
  link: String,
});
</script>
