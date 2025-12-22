<template>
  <div class="group bg-slate-50 p-6 rounded-2xl border border-slate-100
              transition-shadow transition-border duration-3000 ease-in-out
              hover:shadow-pink-100/50 hover:shadow-xl hover:border hover:border-pink-100"
              data-aos="fade-up" data-aos-duration="1500">
    <div class="flex flex-col">
      <div class="w-14 h-14 bg-white rounded-xl shadow-sm
                  flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
        <img class="w-6 h-6 transition-transform duration-300
               group-hover:scale-110" :src="require(`@/assets/Expertise/${icon}.svg`)" :alt="title" />
      </div>

      <h3 class="text-xl-primary-bold mb-3 text-left">
        {{ title }}
      </h3>

      <p class="text-sm-secondary leading-relaxed text-left">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  description: string
}>();
</script>
