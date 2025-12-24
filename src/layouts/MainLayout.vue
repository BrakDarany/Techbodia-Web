<template>
  <Navbar />

  <router-view />

  <FooterSection />
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>
