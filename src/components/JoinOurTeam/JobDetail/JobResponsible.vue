<template>
  <div
    class="group relative bg-white rounded-xl shadow-md
    border-t-4 border-pink-500 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex items-center gap-2 mb-4">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-white"
      >
        <img :src="require(`@/assets/JoinOurTeam/JobDetail/${icon}.svg`)" :alt="icon" width="32" height="32"/>
      </div>
      <h2
        class="text-xl-primary-bold transition-colors duration-300 group-hover:text-pink-500"
      >
        {{ title }}
      </h2>
    </div>
    <ul
      v-if="responsibilities"
      class="list-disc list-inside space-y-4 marker:text-pink-500"
    >
      <li
        v-for="(item, index) in responsibilities"
        :key="index"
        class="text-gray-700"
      >
        <template v-if="hasSubItems(item)">
          <span class="text-base-primary-bold">{{ getTitle(item) }}</span>
          <div class="mt-2 ml-4 space-y-1">
            <p v-for="(subItem, subIndex) in getSubItems(item)" :key="subIndex">
              {{ subItem }}
            </p>
          </div>
        </template>
        <template v-else>
          <span>{{ item.trim() }}</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  responsibilities: Array as () => string[] | undefined,
  icon: String,
});

function hasSubItems(item: string): boolean {
  const lines = item.split('\n');
  return lines.length > 1 && lines.slice(1).some((line) => line.trim().startsWith('-'));
}

function getTitle(item: string): string {
  return item.split('\n')[0].trim();
}

function getSubItems(item: string): string[] {
  return item
    .split('\n')
    .slice(1)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}
</script>
