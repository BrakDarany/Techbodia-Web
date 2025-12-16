<template>
  <div
    class="w-14 h-14 bg-white rounded-lg shadow-sm
           flex items-center justify-center mb-6
           transition-transform group-hover:scale-110"
    style="color: #e91e63"
  >
    <img :src="require(`@/assets/Expertise/${icon}.svg`)" :alt="title" width="24">
  </div>

  <h3 class="card-title">{{ title }}</h3>
  <p class="card-description">
    {{ description }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  description: string
}>();
</script>

<style scoped>
.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
  text-align: left;
}

.card-description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}
</style>
