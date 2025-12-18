<template>
  <div class="bg-white border border-[#f1f5f9] rounded-2xl
   hover:shadow-lg hover:shadow-gray-200 transition-all duration-500 p-8 "
   >
    <div class="bg-gray-50 w-12 h-12 rounded-3xl flex
      items-center justify-center">
      <img :src="require(`@/assets/OurCoreValue/${iconName}.svg`)" :alt="title" width="24"
        height="24">
    </div>
    <h3 class="text-xl font-bold text-gray-900 my-3">{{ title }}</h3>
    <p class="text-sm text-gray-600 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  iconName: string;
}

defineProps<Props>();
</script>
