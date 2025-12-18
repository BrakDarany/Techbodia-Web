<template>
  <section id="passion-and-fun" class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-14">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900">
          We Are Made Of
          <span class="block text-pink-600">Passion & Fun</span>
        </h1>
        <p class="text-body-lg mt-5 max-w-2xl">
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
        data-aos-duration="2000"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CultureCard from '@/components/PassionAndFun/PassionAndFunCard.vue';

const cultureData = [
  {
    title: 'Staff Monthly Birthday',
    image: 'https://browserstack.wpenginepowered.com/wp-content/uploads/2024/01/What-is-Test-Management-scaled.jpg',
  },
  {
    title: 'Team Outing',
    image: 'https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg',
  },
  {
    title: 'Staff Monthly Birthday',
    image: 'https://browserstack.wpenginepowered.com/wp-content/uploads/2024/01/What-is-Test-Management-scaled.jpg',
  },
  {
    title: 'Team Outing',
    image: 'https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg',
  },
  {
    title: 'Staff Monthly Birthday',
    image: 'https://browserstack.wpenginepowered.com/wp-content/uploads/2024/01/What-is-Test-Management-scaled.jpg',
  },
  {
    title: 'Team Outing',
    image: 'https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg',
  },
  {
    title: 'Staff Monthly Birthday',
    image: 'https://browserstack.wpenginepowered.com/wp-content/uploads/2024/01/What-is-Test-Management-scaled.jpg',
  },
  {
    title: 'Team Outing',
    image: 'https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg',
  },
  {
    title: 'Staff Monthly Birthday',
    image: 'https://browserstack.wpenginepowered.com/wp-content/uploads/2024/01/What-is-Test-Management-scaled.jpg',
  },
  {
    title: 'Team Outing',
    image: 'https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg',
  },
  {
    title: 'Staff Monthly Birthday',
    image: 'https://browserstack.wpenginepowered.com/wp-content/uploads/2024/01/What-is-Test-Management-scaled.jpg',
  },
  {
    title: 'Team Outing',
    image: 'https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg',
  },
];
</script>
