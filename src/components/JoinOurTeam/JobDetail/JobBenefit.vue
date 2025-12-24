<template>
  <InfoCard
    title="Job Benefits"
    description="Comprehensive benefits package including public holidays, flexible
      international working environment, and performance-based bonuses twice a year."
  >
    <template #icon>
      <img src="@/assets/JoinOurTeam/JobDetail/gift.svg" alt="Gift Icon" width="28" height="28" />
    </template>

    <div class="flex flex-col gap-4 pb-6 md:grid-cols-2">
      <BenefitCard
        v-for="(benefit, index) in benefits"
        :key="index"
        :text="benefit"
      />
    </div>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from './InfoCard.vue';
import BenefitCard from './BenefitCard.vue';

const benefits = [
  'Cambodian Public Holiday, Annual Leave (subject to company policy).',
  `Flexible, professional, and international working style and environment
  at international standard and technology for international business and market.`,
  'Performance-based bonus twice a year.',
];
</script>
