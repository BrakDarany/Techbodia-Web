<template>
  <DigitalFutureHero />
  <ExpertiseShowcase />
  <TechnologyStack />
  <PassionAndFun />
  <AboutUsInfo />
  <JoinOurTeam />
  <ContactUs />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import DigitalFutureHero from '@/components/DigitalFutureHero.vue';
import ExpertiseShowcase from '@/components/ExpertiseShowcase.vue';
import TechnologyStack from '@/components/TechnologyStack.vue';
import PassionAndFun from '@/components/PassionAndFun.vue';
import AboutUsInfo from '@/components/AboutUsInfo.vue';
import JoinOurTeam from '@/components/JoinOurTeam.vue';
import ContactUs from '@/components/ContactUs.vue';

onMounted(() => {
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname);
  }
});
</script>
