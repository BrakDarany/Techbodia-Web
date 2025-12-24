<template>
  <InfoCard
    title="Job Benefits"
    description="Comprehensive benefits package including public holidays, flexible
      international working environment, and performance-based bonuses twice a year."
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <template #icon>
      <img src="@/assets/JoinOurTeam/JobDetail/gift.svg" alt="Gift Icon" width="28" height="28" />
    </template>

    <div
      class="flex flex-col gap-4 pb-6"
      :class="{ 'md:grid md:grid-cols-2': benefits.length > 4 }"
    >
      <BenefitCard
        v-for="(benefit, index) in benefits"
        :key="index"
        :text="benefit"
      />
    </div>
  </InfoCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InfoCard from './InfoCard.vue';
import BenefitCard from './BenefitCard.vue';

interface IProp {
  jobTitle: string;
}
const props = defineProps<IProp>();

const defaultBenefits = [
  'Cambodian Public Holiday, Annual Leave (subject to company policy).',
  `Flexible, professional, and international working style and environment
  at international standard and technology for international business and market.`,
  'Performance-based bonus twice a year.',
];

const casBenefits = [
  'Comprehensive On-the-Job Training',
  'Monthly full-attendance bonus $25.',
  'Morning Shift (06:00 ~ 15:00): Free Lunch between Monday and Friday.',
  'Afternoon Shift (14:00 ~ 23:00): $50 shift subsidy, $70 food subsidy.',
  'Night Shift (22:00 ~ 07:00): $80 shift subsidy, $70 food subsidy.',
  'Performance-based bonus twice a year.',
  'Conduct a self-performance review once a year.',
  `Flexible, professional, and international working style and
  environment at international standard and technology for international business and market.`,
];

const isCustomerService = computed(
  () => props.jobTitle.toLowerCase().includes('customer service'),
);

const benefits = computed(
  () => (isCustomerService.value ? casBenefits : defaultBenefits),
);
</script>
