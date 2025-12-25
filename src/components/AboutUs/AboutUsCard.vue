<template>
  <div class="card-hover-lift bg-white border-2 border-[#f1f5f9] rounded-2xl
      lg:w-150 p-10">
    <div :class="title === 'Our Mission' ? 'bg-purple-50' : 'bg-pink-50'" class="w-12 h-12 rounded-xl flex
      items-center justify-center">
      <img :src="require(`@/assets/AboutUs/${iconName}.svg`)" :alt="title" width="24"
        height="24">
    </div>
    <h3 class="text-2xl-primary-bold my-4">{{ title }}</h3>
    <p class="text-base-description leading-relaxed">
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
