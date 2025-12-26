<template>
  <section id="join-our-team" class="bg-primary py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <h1 class="title-primary-bold md:text-5xl">
          Join Our Team
        </h1>

        <p class="mt-6 text-lg-description leading-relaxed">
          For those champions who interested with our position and willing to join our
          company as a Techbodiers, please kindly drop us an email.
          We can't wait to meet you!
        </p>

        <p class="mt-4 text-sm-muted-dark">
          We mostly focus on finding staff, not clients here.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          data-aos="fade-up"
          data-aos-duration="1000">
        <CarreerCard
          v-for="job in jobData"
          :key="job.jobTitle"
          :job="job"
          />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import jobData from '@/Data/JobData';
import CarreerCard from './JoinOurTeam/CarreerCard.vue';

</script>
