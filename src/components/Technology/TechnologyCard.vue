<template>
  <div
    class="flex flex-col gap-3 w-20 h-40"
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500"
    >
    <div
      class="bg-white w-full h-20 rounded-xl
      flex justify-center items-center shadow-sm
      transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200"
    >
      <img
        :src="require(`@/assets/TechnologyStack/${iconName}.svg`)"
        :alt="iconName"
        class="w-8 h-8"
      />
    </div>
    <span class="text-slate-600 text-sm capitalize">{{ iconName }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconName: string;
}>();
</script>
