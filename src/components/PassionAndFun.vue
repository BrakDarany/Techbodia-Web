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
        data-aos-duration="600"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CultureCard from '@/components/PassionAndFun/PassionAndFunCard.vue';
import passionAndFunEvents from '@/Data/passion-and-fun';

const cultureData = passionAndFunEvents.map((event) => {
  console.log('event.id:', event);

  return {
    title: event.title,
    images: event.images.map((img) => `${event.id}/${img}`),
  };
});

</script>
