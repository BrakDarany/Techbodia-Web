<template>
  <InfoCard
    title="Leave Policy"
    description="We offer weekends off, paid annual and sick leave,
      wedding and paternity leave, with public holidays per the Cambodian calendar."
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <template #icon>
      <img src="@/assets/JoinOurTeam/JobDetail/policy.svg" alt="Gift Icon" width="32" height="32" />
    </template>

    <ul class="list-disc list-inside space-y-2 marker:text-pink-500">
      <li
        v-for="(value, index) in leavePolicy"
        :key="index"
        class="text-gray-700">
        {{ value }}
      </li>
    </ul>
  </InfoCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InfoCard from './InfoCard.vue';

interface IProp {
  jobTitle: string;
}
const props = defineProps<IProp>();

const defaultLeavePolicy = [
  'Saturday and Sunday are off days.',
  '10 paid sick leave (Need to append the certificate of diagnosis from the hospital).',
  '7 paid wedding leave (Include Saturday & Sunday)',
  '7 paid paternity leave (Include Saturday & Sunday) For take care the wife and newborn baby',
  '12 paid annual leaves(pro-rated)',
  'Public holiday follow Cambodia Calender',
];

const casLeavePolicy = [
  'Compensation leaves for Saturday, Sunday and Cambodian Public Holiday.',
  '12 paid annual leaves (pro-rated).',
  '7 paid wedding leave (Include Saturday & Sunday).',
  '7 paid paternity leave (Include Saturday & Sunday) for taking care of the wife and newborn baby.',
];

const isCustomerService = computed(
  () => props.jobTitle.toLowerCase().includes('customer service'),
);

const leavePolicy = computed(
  () => (isCustomerService.value ? casLeavePolicy : defaultLeavePolicy),
);
</script>
