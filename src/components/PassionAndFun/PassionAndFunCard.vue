<template>
  <div class="relative group rounded-2xl overflow-hidden shadow-lg hover:cursor-pointer">
    <img class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          :src="require(`@/assets/PassionAndFun/${image}.jpg`)" :alt="title" />
    <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
    <div class="absolute bottom-5 left-5">
      <h3 class="text-white text-xl font-semibold">{{ title }}</h3>
      <div class="mt-2 h-1 w-10 bg-pink-500 rounded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
}>();
</script>
