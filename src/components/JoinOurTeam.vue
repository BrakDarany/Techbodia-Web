<template>
  <section id="join-our-team" class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="2000">
        <h1 class="text-5xl-primary-bold md:text-5xl">
          Join Our Team
        </h1>

        <p class="mt-6 text-lg-seconday leading-relaxed">
          For those champions who interested with our position and willing to join our
          company as a Techbodiers, please kindly drop us an email.
          We can't wait to meet you!
        </p>

        <p class="mt-4 text-sm-muted-dark">
          We mostly focus on finding staff, not clients here.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <CarreerCard
          v-for="job in jobs"
          :key="job.title"
          :job="job"
          data-aos="fade-up"
          data-aos-duration="1800"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        class="flex flex-col items-center justify-center mt-12 space-y-6">
        <p class="text-base-secondary">
          Don't see your position? Send us your CV anyway!
        </p>

        <button class="flex items-center gap-3 bg-slate-900 text-white font-semibold
             px-8 py-4 rounded-full
             hover:bg-slate-700 transition-colors duration-300">
           <img src="../assets/JoinOurTeam/message-icon.svg" width="22" height="22"/>
          <span>Send General Application</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CarreerCard from './JoinOurTeam/CarreerCard.vue';

interface Job {
  title: string
  salary: string
  status: 'Open' | 'Closed'
}

const jobs: Job[] = [
  { title: 'Fullstack Developer', salary: '$800 - $1,500', status: 'Open' },
  { title: 'Network Engineer', salary: '$700 - $1,200', status: 'Open' },
  { title: 'NOC Engineer', salary: '$600 - $1,000', status: 'Closed' },
  { title: 'Technical Support', salary: '$500 - $800', status: 'Open' },
  { title: 'Finance Assistant', salary: '$400 - $700', status: 'Closed' },
  { title: 'UI Designer', salary: '$600 - $1,000', status: 'Open' },
  { title: 'Fullstack Developer', salary: '$800 - $1,500', status: 'Open' },
  { title: 'Network Engineer', salary: '$700 - $1,200', status: 'Open' },
  { title: 'NOC Engineer', salary: '$600 - $1,000', status: 'Closed' },
  { title: 'Technical Support', salary: '$500 - $800', status: 'Open' },
  { title: 'Finance Assistant', salary: '$400 - $700', status: 'Closed' },
];
</script>
