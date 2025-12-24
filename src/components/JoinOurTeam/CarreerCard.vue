<template>
  <div
    class="border border-slate-200 rounded-2xl p-6 bg-white
           transition duration-300 hover:shadow-lg hover:border-pink-200"
  >
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-lg-primary-bold">
        {{ job.jobTitle }}
      </h3>
    </div>

    <p class="text-sm-muted">Salary Range</p>
    <p class="text-lg-primary-bold mt-1">
      {{ job.salaryRange }}
    </p>

    <button
      @click="goToJobDetail"
      class="mt-6 w-full btn-primary btn-rounded flex items-center justify-center gap-2"
    >
      View Job Details
    </button>
  </div>
</template>
<script setup lang="ts">
import { IJobDetail } from '@/model/JoinOurTeam';
import { useRouter } from 'vue-router';

const props = defineProps<{
  job: IJobDetail
}>();

const router = useRouter();
function goToJobDetail() {
  const jobSlug = props.job.jobTitle
    .toLowerCase()
    .replace(/jr\./gi, 'jr')
    .replace(/sr\./gi, 'sr')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-+/g, '-');

  router.push({
    name: 'ViewJobDetail',
    params: { jobTitle: jobSlug },
  });
}
</script>
