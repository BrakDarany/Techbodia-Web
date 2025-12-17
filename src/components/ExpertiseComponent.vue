<template>
  <div class="expertise-container">
    <div class="expertise-header">
      <p class="section-label">WHAT WE DO</p>
      <h2 class="section-title mt-4 mb-6">Our Expertise</h2>
      <p class="section-description">
        We deliver end-to-end technology solutions that drive growth and
        innovation.
      </p>
    </div>
    <div class="expertise-grid">
      <div
        v-for="(item, index) in expertiseList"
        :key="index"
        class="expertise-card"
      >
        <ExpertiseCard
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpertiseCard from './Expertise/ExpertiseCard.vue';

const expertiseList = [
  {
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications designed for engagement and performance.',
    icon: 'app-development',
  },
  {
    title: 'Web Development',
    description:
      'Responsive, scalable web platforms built with modern technologies and best practices.',
    icon: 'web-development',
  },
  {
    title: 'IT Solutions',
    description:
      'Comprehensive infrastructure and software solutions tailored to your business needs.',
    icon: 'it-soloution',
  },
  {
    title: 'IT Consultancy',
    description:
      'Strategic guidance to help you navigate digital transformation and optimize operations.',
    icon: 'it-consultant',
  },
];
</script>

<style scoped>
.expertise-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  margin: auto;
  background-color: #ffffff;
  /* height: 80vh; */
  text-align: center;
}

.expertise-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-label {
  color: #e91e63;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}

.section-description {
  font-size: 18px;
  color: #475569;
  margin: 1rem 0 0 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  width: 100%;
  margin: 0 auto;
}

.expertise-card {
  background-color: #f8fafc;
  padding: 1.6rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  border: 0.5px solid rgba(229, 231, 235, 0.3);
}

.expertise-card:hover {
  transform: translateY(-4px);
  box-shadow: 2px 10px 10px rgba(233, 30, 99, 0.08);
  border-color: rgba(233, 30, 99, 0.2);
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

@media (min-width: 768px) and (max-width: 1024px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200px;
  }

  .expertise-card:hover {
    box-shadow: 2px 16px 16px rgba(233, 30, 99, 0.05);
  }
}

@media (min-width: 1025px) {
  .expertise-container {
    height: 80vh;
  }

  .expertise-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
  }

  .expertise-card:hover {
    box-shadow: 2px 16px 16px rgba(233, 30, 99, 0.05);
  }
}
</style>
