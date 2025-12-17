<template>
  <div class="navbar-container flex justify-between
      p-3 py-1 lg:justify-around lg:py-1">
    <img class="h-[48px] w-[48px] lg:h-[72px] lg:w-[72px]" src="../assets/Navbar/TB-logo.svg" alt="#">

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
    <!-- <img class="h-[48px] w-[48px] lg:h-[72px] lg:w-[72px]" /> -->

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
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

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
