<template>
  <div class="relative group rounded-2xl overflow-hidden shadow-lg hover:cursor-pointer">
    <Swiper
      :modules="[Autoplay, Navigation, EffectFade]"
      :spaceBetween="30"
      :navigation="true"
      :slidesPerView="'auto'"
      :speed="800"
      class="h-64 w-full"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <img
          class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          :src="require(`@/assets/PassionAndFun/${img}.jpg`)"
          :alt="title"
        />
      </SwiperSlide>
    </Swiper>
    <div class="absolute bottom-0 right-0 left-0 top-10 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-5 left-5 pointer-events-none z-10">
      <h3 class="text-white text-xl font-semibold">{{ title }}</h3>
      <div class="mt-2 h-1 w-10 bg-pink-500 rounded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';

defineProps<{
  title: string
  images: string[]
}>();
</script>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  z-index: 20;
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  font-size: 14px;
  font-weight: bold;
}

</style>
