<template>
  <div
    id="expertise"
    class="flex flex-col items-center justify-center px-8 py-16 bg-white text-center mx-auto md:py-24 lg:h-[80vh]">
    <div class="mb-12"
      data-aos="fade-up"
      data-aos-duration="2000">
      <p class="text-pink-600 text-sm font-bold tracking-widest uppercase">WHAT WE DO</p>
      <h2 class="mt-4 mb-6 text-4xl font-bold text-slate-900 leading-tight">Our Expertise</h2>
      <p class="text-body-lg max-w-xl mx-auto">
        We deliver end-to-end technology solutions that drive growth and innovation.
      </p>
    </div>

    <div
      class="grid grid-cols-1 gap-6 w-full md:grid-cols-2 lg:grid-cols-4 max-w-300">
      <div v-for="(item, index) in expertiseList" :key="index">
        <ExpertiseCard
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpertiseCard from './Expertise/ExpertiseCard.vue';

const expertiseList = [
  {
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications designed for engagement and performance.',
    icon: 'app-development',
  },
  {
    title: 'Web Development',
    description:
      'Responsive, scalable web platforms built with modern technologies and best practices.',
    icon: 'web-development',
  },
  {
    title: 'IT Solutions',
    description:
      'Comprehensive infrastructure and software solutions tailored to your business needs.',
    icon: 'it-soloution',
  },
  {
    title: 'IT Consultancy',
    description:
      'Strategic guidance to help you navigate digital transformation and optimize operations.',
    icon: 'it-consultant',
  },
];
</script>
