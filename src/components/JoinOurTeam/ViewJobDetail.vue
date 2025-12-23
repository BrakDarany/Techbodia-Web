<template>
  <div class="max-w-5xl mx-auto mt-20 p-6 space-y-6">
    <!-- Job Header -->
    <div
      class="bg-white rounded-2xl shadow-lg p-8 border mb-10 border-gray-100 relative overflow-hidden"
    >
      <h1 class="text-3xl-primary-bold">Senior Full Stack Engineer</h1>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-base-primary">
        <div
          v-for="(item, index) in jobDetails"
          :key="index"
          class="flex items-center gap-1"
        >
          <div class="p-2 rounded-lg bg-gray-50 text-pink-500">
            <img
              :src="require(`@/assets/JoinOurTeam/JobDetail/${item.icon}.svg`)"
              :alt="item.label"
              width="24"
              height="24"
            />
          </div>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <p class="mt-4 text-base-description">
        We are looking for an experienced Full Stack Engineer to join our core
        product team. You will be responsible for architecting and building
        scalable features that power our next-generation platform. If you're
        passionate about clean code, modern tech stacks, and user-centric
        design, we want to hear from you.
      </p>
    </div>
    <div
      class="group relative bg-white rounded-xl shadow-md border-t-4 border-pink-500
            p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="flex items-center gap-2">
        <svg
          class="w-5 h-5 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
        <!-- Use group-hover:text-pink-500 -->
        <h2 class="text-xl-primary-bold transition-colors duration-300 group-hover:text-pink-500">
          Application Development
        </h2>
      </div>
      <p class="text-gray-700">
        Design and build robust, scalable web applications using modern React
        patterns and TypeScript. You will own features from conception to
        deployment.
      </p>

      <h3 class="font-semibold text-gray-800 uppercase">
        Key Responsibilities
      </h3>
      <ul
        class="list-disc list-inside text-gray-700 space-y-1 marker:text-pink-500"
      >
        <li>Architect and implement new features using React and Node.js</li>
        <li>Optimize application for maximum speed and scalability</li>
        <li>
          Collaborate with product and design teams to define requirements
        </li>
      </ul>
    </div>
    <div
      class="group relative bg-white rounded-xl shadow-md border-t-4 border-pink-500
            p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="flex items-center gap-2">
        <svg
          class="w-5 h-5 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
        <!-- Use group-hover:text-pink-500 -->
        <h2 class="text-xl-primary-bold transition-colors duration-300 group-hover:text-pink-500">
          Application Development
        </h2>
      </div>
      <p class="text-gray-700">
        Design and build robust, scalable web applications using modern React
        patterns and TypeScript. You will own features from conception to
        deployment.
      </p>

      <h3 class="font-semibold text-gray-800 uppercase">
        Key Responsibilities
      </h3>
      <ul
        class="list-disc list-inside text-gray-700 space-y-1 marker:text-pink-500"
      >
        <li>Architect and implement new features using React and Node.js</li>
        <li>Optimize application for maximum speed and scalability</li>
        <li>
          Collaborate with product and design teams to define requirements
        </li>
      </ul>
    </div>
    <div
      class="group relative bg-white rounded-xl shadow-md border-t-4 border-pink-500
            p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="flex items-center gap-2">
        <svg
          class="w-5 h-5 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
        <!-- Use group-hover:text-pink-500 -->
        <h2 class="text-xl-primary-bold transition-colors duration-300 group-hover:text-pink-500">
          Application Development
        </h2>
      </div>
      <p class="text-gray-700">
        Design and build robust, scalable web applications using modern React
        patterns and TypeScript. You will own features from conception to
        deployment.
      </p>

      <h3 class="font-semibold text-gray-800 uppercase">
        Key Responsibilities
      </h3>
      <ul
        class="list-disc list-inside text-gray-700 space-y-1 marker:text-pink-500"
      >
        <li>Architect and implement new features using React and Node.js</li>
        <li>Optimize application for maximum speed and scalability</li>
        <li>
          Collaborate with product and design teams to define requirements
        </li>
      </ul>
    </div>
    <section class="w-full max-w-6xl mx-auto">
      <div class="group relative bg-white rounded-xl shadow-md border-t-4 border-pink-500
            p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
        <div class="flex items-center gap-4 border-b border-pink-100 pb-3">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white"
          >
            <img  src="../../assets/JoinOurTeam/JobDetail/gift.svg" alt="#" width="28" height="28">
          </div>
          <h2 class="text-2xl font-semibold text-pink-600 mb-3">
            Job Benefits
          </h2>
        </div>

        <p class="py-4 text-gray-600">
          Comprehensive benefits package including public holidays, flexible
          international working environment, and performance-based bonuses twice a year.
        </p>

        <div class="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2">
          <BenefitCard text="Saturday and Sunday are off days" />
          <BenefitCard
            text="Cambodian Public Holidays and Annual Leave (subject to company policy)"
          />
          <BenefitCard
            text="10 paid sick leave (certificate of diagnosis required from hospital)"
          />
          <BenefitCard
            text="7 paid wedding leave (includes Saturday & Sunday)"
          />
          <BenefitCard
            text="7 paid paternity leave (includes Saturday & Sunday) for care of wife and newborn"
          />
          <BenefitCard
            text="12 paid annual leaves (pro-rated)"
          />
          <BenefitCard
            class="md:col-span-2"
            text="Public holidays follow Cambodia Calendar"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BenefitCard from './BenefitCard.vue';

const jobDetails = [
  { icon: 'salary', label: '$140k - $180k' },
  { icon: 'full-time', label: 'Full-time' },
  { icon: 'position', label: 'Senior Level' },
];
</script>

<style scoped></style>
