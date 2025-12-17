<template>
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600">
      {{ icon }}
    </div>
    <div>
      <p class="font-semibold text-gray-900">{{ title }}</p>
      <slot>
        <p class="text-gray-600">{{ value }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  value: String,
});
</script>
