<template>
  <div
    class="flex flex-col justify-center items-center px-8 py-16 mx-auto lg:h-[78vh] bg-tertiary text-center">
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      class="mb-12 text-center">
      <h2 class="text-3xl-primary-bold mb-2">Technology Stack</h2>
      <p class="text-base-description mx-auto max-w-xl">
        Our team are experts in the latest technologies
      </p>
    </div>

    <div
      class="grid gap-12 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-28 auto-rows-[100px] text-slate-900">
      <TechnologyCard
        v-for="(value, index) in technologyIcon"
        :key="index"
        :icon-name="value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TechnologyCard from './Technology/TechnologyCard.vue';

const technologyIcon: string[] = [
  'vue-js',
  'nuxt-js',
  'node-js',
  'dot-net',
  'sql',
  'laravel',
  'redis',
  'aws',
  'c-sharp',
  'flutter',
  'docker',
  'kubernetes',
];
</script>
