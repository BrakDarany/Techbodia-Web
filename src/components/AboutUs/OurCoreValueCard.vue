<template>
  <div class="bg-white border border-[#f1f5f9] rounded-2xl transition-all duration-500 p-8
   hover:shadow-lg hover:shadow-gray-200 hover:cursor-pointer"
   >
    <div class="bg-gray-50 w-12 h-12 rounded-3xl flex
      items-center justify-center">
      <img :src="require(`@/assets/OurCoreValue/${iconName}.svg`)" :alt="title" width="24"
        height="24">
    </div>
    <h3 class="text-lg-primary-bold my-3">{{ title }}</h3>
    <p class="text-sm-secondary leading-relaxed">
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
