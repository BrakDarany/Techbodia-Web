<template>
  <div class="technology-container">
    <div class="expertise-header">
      <h2 class="section-title">Technology Stack</h2>
      <p class="section-description">
        Our team are experts in the latest technologies
      </p>
    </div>
    <div class="grid-container">
      <div
        v-for="(value, index) in technologyIcon"
        :key="index"
        class="w-20 flex flex-col gap-3"
      >
        <div class="icon-container">
          <img :src="getIcon(value)" :alt="value" />
        </div>
        <span>{{ toPascalCase(value) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const svgContext = require.context(
  '../assets/TechnologyStack',
  false,
  /\.svg$/,
);

const iconMap: Record<string, any> = {};
svgContext.keys().forEach((path) => {
  const filename = path.replace('./', '').replace('.svg', '');
  iconMap[filename] = svgContext(path).default || svgContext(path);
});

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

const getIcon = (name: string) => iconMap[name];
function toPascalCase(str: string) {
  return str
    .split(/[\s-_]+/) // split by space, dash, or underscore
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}
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
  height: 80vh;
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
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
}
.icon-container {
  background-color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #0f172a;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .icon-container:hover{
} */

.icon-container img {
  width: 34px;
  height: 34px;
}
</style>
