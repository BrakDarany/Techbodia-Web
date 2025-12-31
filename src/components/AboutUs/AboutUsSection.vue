<template>
  <div class="max-w-7xl mx-auto">
    <div data-aos="fade-up" data-aos-duration="1000" class="text-center lg:mt-12 mb-12">
      <p class="title-primary-bold">
        About <span class="bg-pink-600 text-white px-3 py-1 inline-block">Us</span>
      </p>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000" class="text-center mb-16 max-w-3xl mx-auto">
      <p class="text-xl-seconday leading-relaxed">
        Founded with a passion for technology and a commitment to excellence,
        we have grown into a diverse team of problem solvers and creative
        thinkers.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        data-aos="fade-left"
        data-aos-duration="1000"
    >
      <AboutUsCard
        v-for="(value, index) in coreValueCards"
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
import AboutUsCard from './AboutUsCard.vue';

const coreValueCards: ICoreValue[] = [
  {
    title: 'Our Vision',
    description: 'We constantly ask questions and seek new perspectives to drive innovation.',
    iconName: 'Our-Vision',
  },
  {
    title: 'Trust',
    description: 'We build relationships based on transparency, honesty, and mutual respect.',
    iconName: 'Our-Mission',
  },
];
</script>
