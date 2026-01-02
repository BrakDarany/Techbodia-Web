<template>
  <div class="max-w-7xl mx-auto mt-24 lg:pr-7">
    <div class="text-center mb-12">
      <h2 class="text-2xl-primary-bold">
        Our Core Values
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <OurCoreValueCard
        v-for="(value, index) in ourCoreValues"
        :key="index"
        :title="value.title"
        :description="value.description"
        :icon-name="value.iconName"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICoreValue } from '@/model/AboutUs';
import OurCoreValueCard from './OurCoreValueCard.vue';

const ourCoreValues: ICoreValue[] = [
  {
    title: 'Be Curious',
    description: 'We constantly ask questions and seek new perspectives to drive innovation.',
    iconName: 'be-curious',
  },
  {
    title: 'Trust',
    description: 'We build relationships based on transparency, honesty, and mutual respect.',
    iconName: 'trust',
  },
  {
    title: 'Never Stop Improving',
    description: 'We are committed to continuous learning and elevating our standards.',
    iconName: 'never-stop-improve',
  },
  {
    title: 'Inspect And Adapt',
    description: 'We regularly review our work and processes to evolve and overcome challenges.',
    iconName: 'inspect-and-adapt',
  },
  {
    title: 'Goal Driven',
    description: 'We stay focused on clear objectives to deliver measurable results.',
    iconName: 'goal-driven',
  },
];
</script>
