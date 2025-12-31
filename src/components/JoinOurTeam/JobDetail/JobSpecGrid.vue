<template>
  <div class="grid lg:grid-cols-2 gap-4">
    <div
      class="h-full" data-aos="flip-right" data-aos-duration="800"
    >
      <JobSpec
        class="h-full"
        :title="isChinese ? 'Job Description (负责任的)' : 'Job Description'"
        :responsibilities="jobResponsible"
        icon="responsible"
      />
    </div>
    <div
      class="h-full" data-aos="flip-right" data-aos-duration="800"
    >
      <JobSpec
        class="h-full"
        :title="isChinese ? 'Job Requirement (要求)' : 'Job Requirement'"
        :responsibilities="jobRequirement"
        icon="requirement"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import JobSpec from '@/components/JoinOurTeam/JobDetail/JobSpec.vue';

const props = defineProps<{
  jobTitle: string;
  jobResponsible: string[];
  jobRequirement: string[];
}>();

const isChinese = computed(() => props.jobTitle.includes('Customer Service'));
</script>
