<template>
  <div class="flex justify-between p-5 lg:justify-around py-5" style="background-color: white;">
    <div class="flex gap-2 justify-center items-center">
      <div class="w-10 h-10 flex items-center justify-center rounded-lg"
        style="background-color: #E91E63;">
        TB
      </div>
      <span class="font-bold text-xl text-[black]">Techbodia</span>
    </div>

    <div
      class="nav-bar hidden lg:flex flex-row justify-end items-center gap-7
      transition-colors"
    >
      <div class="nav-link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/how-we-work">Services</router-link>
      </div>
      <div class="nav-link">
         <router-link to="/about">Culture</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/about-us">About</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/contact">Contact</router-link>
      </div>
      <button
        @click="goToCareer"
        class="career-btn"
        style="background-color: #E91E63;"
      >
        Careers Opportunity
      </button>
    </div>
    <img class="block md:hidden" src="../assets/Navbar/menu-icon.svg" alt="#" width="26" height="26">
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCareer = () => {
  router.push('/career');
};

</script>

<style>
.career-btn {
  background-color: #E91E63;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 9999px;
  padding: 10px 24px;
  transition: all 300ms ease;
  position: relative;
  box-shadow: 0 4px 15px -4px rgba(255, 21, 132, 0.6);
}

.career-btn:hover {
  transform: translateY(-3px);
  border-radius: 20px;
  box-shadow: 0 8px 25px -4px rgba(255, 21, 132, 0.6);
}

.active {
  color: #E91E63;
}

.nav-bar{
  font-size: 14px;
  font-weight:500;
  color: #475569;
  transition: color 500ms ease;
}

.nav-link:hover {
  color: #E91E63;
}
</style>
