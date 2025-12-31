<template>
  <section id="contact-us" class="lg:h-[80vh] bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
    <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <ContactUsLabel />

      <ContactForm
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactUsLabel from './ContactUs/ContactHero.vue';
import ContactForm from './ContactUs/ContactForm.vue';
</script>
