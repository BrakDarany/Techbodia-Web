<template>
  <section
    class="bg-[#FAF7F9] px-8 py-16 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-8"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      class="md:w-138 flex flex-col gap-6 items-start"
    >
      <div
        class="inline-flex items-center justify-center py-1
        rounded-full text-sm font-medium mt-22 bg-[#FDF2F8] text-[#E91E63] w-55"
      >
        Customer Satisfaction First
      </div>

      <h1
        class="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
      >
        We Build
        <br />
        <span
          class="text-transparent bg-clip-text bg-linear-to-r from-[#E91E63] to-purple-600"
        >
          Digital Future
        </span>
      </h1>

      <p
        class="text-lg md:text-[18px] text-[#475569] leading-relaxed max-w-130"
      >
        Transforming ideas into powerful, tailor-made digital solutions.
        Architecting, building and securing the technology that empowering our
        global clients.
      </p>

      <div class="flex flex-col lg:flex-row lg:items-center gap-5 mt-3">
        <button
          class="flex items-center justify-center gap-1 w-42.5 py-3
          rounded-full bg-[#E91E63] text-white font-medium text-base
          shadow-[0_8px_24px_rgba(233,30,99,0.3)] transition-transform duration-300 hover:bg-pink-700"
        >
          Apply Now
          <img
            src="../assets/DigitalFuture/arrow-right.svg"
            alt="#"
            class="w-6"
          />
        </button>
        <a
          href="#"
          class="w-65.5 py-3 px-6 rounded-[30px] text-base font-semibold
          text-[#0F172A] bg-white border border-[#E2E8F0] transition-colors
          duration-500 hover:text-[#E91E63] hover:border-[#E91E63] text-center"
        >
          View Our Working Culture
        </a>
      </div>

      <div
        class="w-4/5 flex gap-12 mt-4 pt-4 border-t border-slate-100 md:mt-6 md:pt-6 lg:mt-8 lg:pt-8"
      >
        <div class="flex flex-col" v-for="(stat, index) in stats" :key="index">
          <div class="text-3xl md:text-[30px] font-bold text-[#0F172A]">
            {{ stat.number }}
          </div>
          <div class="text-sm text-[#64748B]">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      class="md:w-138 flex justify-center items-center mt-6 lg:mt-0"
    >
      <div
        class="relative w-81 h-52.5 md:w-147 md:h-67.5
        lg:w-lg lg:h-72 flex items-center justify-center
        rounded-3xl bg-[#0F172A] shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        <button
          class="flex items-center justify-center
          transition-transform duration-300 hover:scale-110
          bg-none border-none cursor-pointer"
        >
          <svg
            class="w-18 h-18 hover:w-18 hover:h-18"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.2" />
            <path d="M19 16L19 32L32 24L19 16Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { number: '50+', label: 'Projects' },
  { number: '50+', label: 'Experts' },
  { number: '2', label: 'Offices' },
];
</script>
