<template>
  <section id="contact-us" class="lg:h-[80vh] bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
    <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="2000">
        <div class="flex flex-col">
          <h1 class="text-4xl-primary-bold leading-tight">
            Let's Build Something<br />Amazing Together
          </h1>
          <p class="text-lg-description mt-4">
            Ready to start your next project? We're here to help you transform
            your ideas into reality.
          </p>
        </div>

        <div class="mt-10 space-y-6">
          <ContactInfo v-for="(item, index) in contactList" :key="index" :icon="item.icon" :title="item.title"
            :value="item.value" :link="item.link">
            <div v-if="item.socials" class="flex gap-4 text-gray-600 mt-2">
              <a
                v-for="(social, i) in item.socials"
                :key="i"
                :href="social.link"
                target="_blank"
                class="flex gap-2 items-center group"
              >
                <img
                  :src="require(`@/assets/ContactUs/${social.icon}.svg`)"
                  alt="#"
                  width="20"
                  height="20"
                  class="social-icon transition-all duration-300"
                />
                <span class="transition-colors duration-300 group-hover:text-pink-600">{{ social.name }}</span>
              </a>

            </div>
          </ContactInfo>
        </div>
      </div>

      <ContactForm
        data-aos="fade-left"
        data-aos-duration="2000"
        @submit="handleSubmit" />
    </div>
  </section>
</template>

<script setup>
import ContactInfo from './ContactUs/ContactInfo.vue';
import ContactForm from './ContactUs/ContactForm.vue';

const handleSubmit = (data) => {
  console.log('Form data from child:', data);
};
const contactList = [
  {
    icon: 'Message',
    title: 'Email Us',
    value: 'info.hr@techbodia.com',
    link: 'mailto:info.hr@techbodia.com',
  },
  {
    icon: 'Phone',
    title: 'Telegram',
    value: '+855 10 919 651',
    link: 'https://t.me/+85510919651',
  },
  {
    icon: 'Telegram',
    title: 'Socials',
    socials: [
      {
        name: 'Facebook',
        icon: 'Facebook',
        link: 'https://web.facebook.com/techbodia',
      },
      {
        name: 'LinkedIn',
        icon: 'Linkin',
        link: 'https://www.linkedin.com/company/techbodia/posts/?feedView=all',
      },
    ],
  },
];
</script>

<style scoped>
.group:hover .social-icon {
  filter: invert(24%) sepia(93%) saturate(3000%) hue-rotate(315deg)
    brightness(95%) contrast(95%);
}

</style>
