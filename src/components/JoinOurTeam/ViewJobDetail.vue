<template>
  <div class="max-w-6xl mx-auto mt-20 p-6 space-y-6">
    <JobDescription
      v-if="job"
      :job="job"/>
    <div class="grid lg:grid-cols-2 gap-4">
      <JobResponsible
        title="Requirement"
        :responsibilities="job?.jobRequirement"
        icon="requirement"
      />
      <JobResponsible
        title="Responsibility"
        :responsibilities="job?.jobResponsible"
        icon="responsible"
      />
    </div>
    <LeavePolocy v-if="job" :job-title="job.jobTitle"/>
    <JobBenefit v-if="job" :job-title="job.jobTitle"/>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { IJobDetail } from '@/model/JoinOurTeam';
import { onMounted, ref } from 'vue';
import jobData from '@/Data/JobData';
import JobResponsible from '@/components/JoinOurTeam/JobDetail/JobResponsible.vue';
import JobDescription from '@/components/JoinOurTeam/JobDetail/JobDescription.vue';
import JobBenefit from './JobDetail/JobBenefit.vue';
import LeavePolocy from './JobDetail/LeavePolocyCard.vue';

const route = useRoute();
const router = useRouter();
const job = ref<IJobDetail>();

onMounted(() => {
  const jobTitleSlug = route.params.jobTitle as string;
  console.log('URL jobTitle slug:', jobTitleSlug);

  if (!jobTitleSlug) {
    console.error('No job title in URL');
    router.push('/');
    return;
  }

  const toSlug = (title: string) => title
    .toLowerCase()
    .replace(/jr\./gi, 'jr')
    .replace(/sr\./gi, 'sr')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-+/g, '-');

  job.value = jobData.find((j: any) => toSlug(j.jobTitle) === jobTitleSlug);

  if (!job.value) {
    console.error('Job not found:', jobTitleSlug);
    router.push('/join-our-team');
  }
});
</script>
