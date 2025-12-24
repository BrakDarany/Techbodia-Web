<template>
  <NavbarMenu />

  <router-view />

  <FooterContent />
</template>

<script setup lang="ts">
import NavbarMenu from '@/components/NavbarMenu.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>
