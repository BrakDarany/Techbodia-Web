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
        <div
          class="w-14 h-14 bg-white rounded-lg shadow-xs
          flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
          v-html="item.icon"
          style="color: #e91e63"
        ></div>

        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const expertiseList = [
  {
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications designed for engagement and performance.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="w-7 h-7 text-[#E91E63]">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    `,
  },
  {
    title: 'Web Development',
    description:
      'Responsive, scalable web platforms built with modern technologies and best practices.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="w-7 h-7 text-[#E91E63]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    `,
  },
  {
    title: 'IT Solutions',
    description:
      'Comprehensive infrastructure and software solutions tailored to your business needs.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="w-7 h-7 text-[#E91E63]">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
        <line x1="6" x2="6.01" y1="6" y2="6"></line>
        <line x1="6" x2="6.01" y1="18" y2="18"></line>
      </svg>
    `,
  },
  {
    title: 'IT Consultancy',
    description:
      'Strategic guidance to help you navigate digital transformation and optimize operations.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="w-7 h-7 text-[#E91E63]">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
        </path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
      </svg>
    `,
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
  display: flex;
  flex-direction: column;
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

@media (min-width: 768px) {
  .expertise-container{
    height: 80vh;
  }

  .expertise-grid{
    flex-direction: row;
    max-width: 1200px;
  }

  .expertise-card:hover{
    box-shadow: 2px 16px 16px rgba(233, 30, 99, 0.05);
  }
}
</style>
