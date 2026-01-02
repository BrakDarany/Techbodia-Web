<template>
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
      class="title-tertiary-bold leading-none"
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
        @click="scrollToSection('contact-us')"
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
</template>

<script setup lang="ts">
import { ICompanyStat } from '@/model/DigitalFuture';

const companyStats: ICompanyStat[] = [
  { number: '50+', label: 'Projects' },
  { number: '50+', label: 'Experts' },
  { number: '2', label: 'Offices' },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${sectionId}`);
  }
};
</script>
