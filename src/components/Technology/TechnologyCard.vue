<template>
  <div class="flex flex-col gap-3" style="width: 80px; height: 160px;">
    <div class="icon-container">
       <img :src="require(`@/assets/TechnologyStack/${iconName}.svg`)" :alt="iconName" width="24">
    </div>
    <span class="text-[#475569] text-sm capitalize">{{ iconName }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconName: string;
}>();

</script>

<style scoped>
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

.icon-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon-container img {
  width: 34px;
  height: 34px;
}
</style>
