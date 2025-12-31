<template>
  <div
    class="group relative bg-white rounded-xl shadow-md
    border-t-4 border-pink-500 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="flex items-center gap-2 mb-4">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-white"
      >
        <img :src="require(`@/assets/JoinOurTeam/JobDetail/${icon}.svg`)" :alt="icon" width="30" height="30"/>
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
      <template v-for="(item, index) in responsibilities" :key="index">
        <hr
          v-if="(hasChinese(item) && isFirstChineseItem(index)) || bonusPoint(item)"
          class="border-t border-gray-200 my-4"
        />
        <li class="text-gray-700">
          <template v-if="hasSubItems(item)">
            <span class="text-base-primary-bold">{{ getTitle(item) }}</span>
            <div class="mt-2 ml-4 space-y-1">
              <p v-for="(subItem, subIndex) in getSubItems(item)" :key="subIndex">
                {{ subItem }}
              </p>
            </div>
          </template>
          <template v-else>
            <span>{{ formatDisplayText(item) }}</span>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import jobData from '@/Data/JobData';

const props = defineProps({
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

function hasChinese(text: string): boolean {
  return /[\u4e00-\u9fff]/.test(text);
}

function bonusPoint(text: string): boolean {
  return /bonus\s*point/i.test(text);
}

function formatDisplayText(text: string): string {
  return text.trim().replace(/bonus\s*point\s*/i, '').trim();
}

function isFirstChineseItem(index: number): boolean {
  if (!props.responsibilities) return false;
  for (let i = 0; i < index; i += 1) {
    if (hasChinese(props.responsibilities[i])) {
      return false;
    }
  }
  return hasChinese(props.responsibilities[index]);
}
</script>
