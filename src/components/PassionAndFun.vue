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
        :images="value.images"
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
    title: 'All Hands Meeting',
    images: ['AllHand1', 'AllHand2', 'AllHand3', 'AllHand4', 'AllHand5', 'AllHand6'],
  },
  {
    title: 'Company Trip',
    images: [
      'CompanyTrip1',
      'CompanyTrip3',
      'CompanyTrip4',
      'CompanyTrip2',
      'CompanyTrip5',
      'CompanyTrip6',
    ],
  },
  {
    title: 'Bear Painting Day',
    images: [
      'bear1',
      'bear2',
      'bear3',
      'bear5',
      'bear6',
      'bear7',
      'bear8',
      'bear9',
    ],
  },
  {
    title: 'Figma Workshop',
    images: [
      'FigmaWorkShop5',
      'FigmaWorkShop1',
      'FigmaWorkShop2',
      'FigmaWorkShop3',
      'FigmaWorkShop4',
    ],
  },
  {
    title: 'Hollaween',
    images: [
      'Halloween1',
      'Halloween2',
      'Halloween4',
      'Halloween5',
      'Halloween3',
    ],
  },
  {
    title: 'Khmer Coder',
    images: [
      'KhmerCoder6',
      'KhmerCoder2',
      'KhmerCoder3',
      'KhmerCoder5',
      'KhmerCoder1',
      'KhmerCoder7',
    ],
  },
  {
    title: 'Sport Day',
    images: [
      'SportDay1',
    ],
  },
  {
    title: 'Picnic',
    images: [
      'Picnic1',
      'Picnic2',
      'Picnic3',
      'Picnic4',
      'Picnic5',
      'Picnic6',
      'Picnic7',
    ],
  },
];
</script>
