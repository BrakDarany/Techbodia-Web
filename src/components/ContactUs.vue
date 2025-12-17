<template>
  <section class="bg-gray-50 flex items-center justify-center px-6 py-16">
    <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Left Content -->
      <div>
        <h1 class="text-4xl font-extrabold text-gray-900 leading-tight">
          Let's Build Something<br />Amazing Together
        </h1>

        <p class="mt-4 text-gray-600 max-w-md">
          Ready to start your next project? We're here to help you transform
          your ideas into reality.
        </p>

        <!-- Contact Info -->
        <div class="mt-10 space-y-6">
          <ContactInfo
            icon="✉️"
            title="Email Us"
            value="info.hr@techbodia.com"
          />
          <ContactInfo
            icon="📞"
            title="Call Us"
            value="+855 10 919 651"
          />
          <ContactInfo
            icon="📣"
            title="Socials"
          >
            <div class="flex gap-4 text-gray-600">
              <a href="#" class="hover:text-pink-600">Facebook</a>
              <a href="#" class="hover:text-pink-600">LinkedIn</a>
            </div>
          </ContactInfo>
        </div>
      </div>

      <!-- Right Form -->
      <ContactForm @submit="handleSubmit" />

    </div>
  </section>
</template>

<script setup>
import ContactInfo from './ContactUs/ContactInfo.vue';
import ContactForm from './ContactUs/ContactForm.vue';

const handleSubmit = (data) => {
  console.log('Form data from child:', data);
};
</script>
