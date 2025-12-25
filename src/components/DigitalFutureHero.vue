<template>
  <section
    id="digital-future"
    class="bg-secondary px-8 py-16 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-8"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      class="md:w-138 flex flex-col gap-6 items-start"
    >
      <div
        class="inline-flex items-center justify-center py-1
        rounded-full text-sm font-medium mt-22 bg-[#FDF2F8] text-[#E91E63] w-55"
      >
        Customer Satisfaction First
      </div>

      <p
        class="title-tertiary-bold leading-tight"
      >
        We Build
        <br />
        <span
          class="text-transparent bg-clip-text bg-linear-to-r from-[#E91E63] to-purple-600"
        >
          Digital Future
        </span>
      </p>

      <p
        class="text-lg-description leading-relaxed max-w-130"
      >
        Transforming ideas into powerful, tailor-made digital solutions.
        Architecting, building and securing the technology that empowering our
        global clients.
      </p>

      <div class="flex flex-col lg:flex-row lg:items-center gap-5 mt-3">
        <button
          class="btn-primary btn-round w-42.5"
          @click="scrollToSection('join-our-team')"
        >
          Apply Now
          <img
            src="../assets/DigitalFuture/arrow-right.svg"
            alt="#"
            class="w-6"
          />
        </button>

        <button
          class="w-65.5 btn-outline-primary btn-round"
          @click="scrollToSection('passion-and-fun')"
        >
          View Our Working Culture
        </button>
      </div>

      <div
        class="w-4/5 flex gap-12 mt-4 pt-4 border-t border-slate-100 md:mt-6 md:pt-6 lg:mt-8 lg:pt-8"
      >
        <div class="flex flex-col" v-for="(stat, index) in companyStats" :key="index">
          <div class="text-3xl-primary-bold md:text-[30px]">
            {{ stat.number }}
          </div>
          <div class="text-sm-muted">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-left"
      data-aos-duration="800"
      class="md:w-138 flex justify-center items-center mt-6 lg:mt-0 hover:cursor-pointer"
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
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ICompanyStat } from '@/model/DigitalFuture';

const youtubeVideoId = ref('XhQei6kUoKg');
const isPlaying = ref(false);

const youtubeThumbnail = computed(
  () => `https://img.youtube.com/vi/${youtubeVideoId.value}/hq720.jpg`,
);

const playVideo = () => {
  isPlaying.value = true;
};

const companyStats: ICompanyStat[] = [
  { number: '50+', label: 'Projects' },
  { number: '50+', label: 'Experts' },
  { number: '2', label: 'Offices' },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
