<template>
  <section id="about-us" class="py-16 px-4 sm:px-6 lg:px-8 bg-tertiary">
    <div class="max-w-7xl mx-auto">
      <div data-aos="fade-up" data-aos-duration="2000" class="text-center lg:mt-12 mb-12">
        <p class="title-primary-bold">
          About <span class="bg-pink-600 text-white px-3 py-1 inline-block">Us</span>
        </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" class="text-center mb-16 max-w-3xl mx-auto">
        <p class="text-xl-seconday leading-relaxed">
          Founded with a passion for technology and a commitment to excellence,
          we have grown into a diverse team of problem solvers and creative
          thinkers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <AboutUsCard
          v-for="(value, index) in coreValueCards"
          :key="index"
          :title="value.title"
          :description="value.description"
          :icon-name="value.iconName"
          :data-aos="index === 0 ? 'fade-left' : 'fade-right'"
          data-aos-duration="2000"
        />
      </div>
    </div>

    <div class="max-w-7xl mx-auto mt-24 lg:pr-7">
      <div class="text-center mb-12">
        <h2 class="text-2xl-primary-bold">
          Our Core Values
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OurCoreValueCard
          data-aos="fade-up"
          data-aos-duration="2000"
          v-for="(value, index) in ourCoreValues"
          :key="index"
          :title="value.title"
          :description="value.description"
          :icon-name="value.iconName"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ICoreValue } from '@/model/AboutUs';
import AboutUsCard from './AboutUs/AboutUsCard.vue';
import OurCoreValueCard from './AboutUs/OurCoreValueCard.vue';

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

const ourCoreValues: ICoreValue[] = [
  {
    title: 'Our Vision',
    description: 'We constantly ask questions and seek new perspectives to drive innovation.',
    iconName: 'be-curious',
  },
  {
    title: 'Trust',
    description: 'We build relationships based on transparency, honesty, and mutual respect.',
    iconName: 'trust',
  },
  {
    title: 'Continuous Learning',
    description: 'We are committed to continuous learning and elevating our standards.',
    iconName: 'never-stop-improve',
  },
  {
    title: 'Evolution & Growth',
    description: 'We regularly review our work and processes to evolve and overcome challenges.',
    iconName: 'inspect-and-adapt',
  },
  {
    title: 'Results Driven',
    description: 'We stay focused on clear objectives to deliver measurable results.',
    iconName: 'goal-driven',
  },
];
</script>
