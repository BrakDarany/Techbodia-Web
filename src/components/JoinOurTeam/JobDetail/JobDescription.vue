<template>
  <div
    class="bg-white rounded-2xl p-8 border mb-6 border-gray-100 relative overflow-hidden
          transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-100"
  >
    <div class="flex flex-col items-start gap-2 mg:gap-0 md:flex-row md:justify-between md:items-center">
      <h1 class="text-3xl-primary-bold">{{ props.job.jobTitle }}</h1>
      <button
        type="button"
        class="btn-primary btn-rounded"
        @click="openApplicationPopup"
      >
        Apply Now
        <img
          src="@/assets/DigitalFuture/arrow-right.svg"
          alt="#"
          class="w-6"
        />
      </button>
    </div>
    <div class="grid md:grid-cols-3 gap-4 mt-4 text-base-primary">
      <div
        v-for="(item, index) in infoItems"
        :key="index"
        class="flex items-center gap-1"
      >
        <div class="p-2 rounded-lg bg-gray-50 text-pink-500">
          <img
            :src="require(`@/assets/JoinOurTeam/JobDetail/${item.icon}.svg`)"
            :alt="item.alt"
            width="24"
            height="24"
          />
        </div>
        <span>{{ item.value }}</span>
      </div>
    </div>

    <p class="mt-4 text-base-description">{{ props.job.description }}</p>

    <!-- Job Application Popup -->
    <JobApplicationPopup
      :is-open="isPopupOpen"
      :selected-job="props.job.jobTitle"
      @close="closeApplicationPopup"
    />
  </div>
</template>

<script setup lang="ts">
import { IJobDetail } from '@/model/JoinOurTeam';
import { computed, ref } from 'vue';
import JobApplicationPopup from './JobApplicationPopup.vue';

const props = defineProps<{ job: IJobDetail }>();

const isPopupOpen = ref(false);

const openApplicationPopup = () => {
  isPopupOpen.value = true;
};

const closeApplicationPopup = () => {
  isPopupOpen.value = false;
};

const infoItems = computed(() => [
  {
    icon: 'salary',
    alt: 'salary',
    value: props.job.salaryRange,
  },
  {
    icon: 'full-time',
    alt: 'employment type',
    value: 'Full time',
  },
  {
    icon: 'position',
    alt: 'job title',
    value: props.job.jobTitle,
  },
]);
</script>
