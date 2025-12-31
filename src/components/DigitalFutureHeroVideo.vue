<template>
  <div
    data-aos="fade-left"
    data-aos-duration="800"
    class="md:w-138 flex justify-center items-center mt-6 lg:mt-9 hover:cursor-pointer"
  >
    <div
      class="relative w-85.5 h-53.75 md:w-147 md:h-67.5
      lg:w-lg lg:h-72 aspect-video flex items-center justify-center
      rounded-3xl shadow-2xl overflow-hidden"
    >
      <img
        v-if="!isPlaying"
        :src="youtubeThumbnail"
        alt="Video thumbnail"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <button
        v-if="!isPlaying"
        @click="playVideo"
        class="relative z-10 flex items-center justify-center
        transition-transform duration-300 hover:scale-110
        bg-none border-none cursor-pointer"
      >
        <svg
          class="w-18 h-18"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="gray" fill-opacity="0.2" />
          <path d="M19 16L19 32L32 24L19 16Z" fill="gray" />
        </svg>
      </button>
      <iframe
        v-if="isPlaying"
        :src="`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`"
        class="absolute inset-0 w-full h-full object-cover"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const youtubeVideoId = ref('XhQei6kUoKg');
const isPlaying = ref(false);

const youtubeThumbnail = computed(
  () => `https://img.youtube.com/vi/${youtubeVideoId.value}/hq720.jpg`,
);

const playVideo = () => {
  isPlaying.value = true;
};
</script>
