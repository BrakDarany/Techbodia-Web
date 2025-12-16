<template>
  <div class="technology-container">
    <div class="expertise-header">
      <h2 class="section-title">Technology Stack</h2>
      <p class="section-description">
        Our team are experts in the latest technologies
      </p>
    </div>
    <div class="grid-container">
      <TechnologyCard
        v-for="(value, index) in technologyIcon"
        :key="index"
        :icon-name="value"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TechnologyCard from './Technology/TechnologyCard.vue';

const technologyIcon = [
  'vue-js',
  'nuxt-js',
  'node-js',
  'dot-net',
  'sql',
  'laravel',
  'redis',
  'aws',
  'c-sharp',
  'flutter',
  'docker',
  'kubernetes',
];
</script>

<style scoped>
.technology-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  margin: auto;
  background-color: #f8fafc;
  height: 100vh;
  text-align: center;
}

.expertise-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0.5rem 0;
  line-height: 1.2;
}

.section-description {
  font-size: 1rem;
  color: #475569;
  margin: 1rem 0 0 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.card-icon {
  color: #e91e63;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #fdf2f8;
  border-radius: 0.5rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3rem;
  column-gap: 4rem;
  width: 100%;
  max-width: 900px;
  color: #0f172a;
}
.icon-container {
  background-color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-container:hover{
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon-container img {
  width: 34px;
  height: 34px;
}

@media (min-width: 768px) {
  .grid-container{
    grid-template-columns: repeat(6, 1fr);
  }

  .technology-container{
    height: 80vh;
  }
}
</style>
