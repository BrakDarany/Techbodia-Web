<template>
  <Navbar />

  <router-view />

  <FooterSection />
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>
