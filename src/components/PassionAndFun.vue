<template>
  <section id="passion-and-fun" class="py-24 bg-primary overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-14">
        <p class="title-primary-bold leading-none">
          We Are Made Of
          <span class="block title-pink-bold leading-none mt-1">Passion & Fun</span>
        </p>
        <p class="text-lg-description max-w-2xl mt-4">
          Our culture is our superpower. We believe that a happy team creates <br> the best work.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
      <CultureCard
        v-for="(value, index) in cultureData"
        :key="index"
        :title="value.title"
        :image="value.image"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CultureCard from '@/components/PassionAndFun/PassionAndFunCard.vue';
import { ICultureItem } from '@/model/PassionAndFun';

const cultureData: ICultureItem[] = [
  {
    title: 'Bear Painting',
    image: 'Painting1',
  },
  {
    title: 'All Hands Meeting',
    image: 'AllHandMeeting1',
  },
  {
    title: 'Halloween Party',
    image: 'Halloween',
  },
  {
    title: 'Khmer Coder Event',
    image: 'KhmerCoder1',
  },
  {
    title: 'Tech Community',
    image: 'KhmerCoder2',
  },
  {
    title: 'Team Picnic',
    image: 'Picnic1',
  },
  {
    title: 'Outdoor Fun',
    image: 'Picnic2',
  },
  {
    title: 'Nature Day',
    image: 'Picnic3',
  },
  {
    title: 'Year End Party',
    image: 'YearEngParty',
  },
];
</script>
