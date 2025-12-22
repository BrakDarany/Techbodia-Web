<template>
  <div
    class="border border-slate-200 rounded-2xl p-6 bg-white
           transition duration-300 hover:shadow-lg hover:border-pink-200"
  >
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-lg-primary-bold">
        {{ job.title }}
      </h3>

      <span
        v-if="job.status === 'Open'"
        class="bg-green-100 text-xs-dark-green-medium
               px-3 py-1 rounded-full"
      >
        Open
      </span>

      <span
        v-else
        class="bg-slate-100 text-xs-muted-bold
               px-3 py-1 rounded-full"
      >
        Closed
      </span>
    </div>

    <!-- Salary -->
    <p class="text-sm-muted">Salary Range</p>
    <p class="text-lg-primary-bold mt-1">
      {{ job.salary }}
    </p>

    <!-- Button -->
    <button
      v-if="job.status === 'Open'"
      class="mt-6 w-full btn-primary btn-rounded"
    >
      Apply Now
    </button>

    <button
      v-else
      disabled
      class="mt-6 w-full bg-slate-100 text-slate-400 font-semibold
             py-3 rounded-xl cursor-not-allowed"
    >
      Not Hiring
    </button>
  </div>
</template>
<script setup lang="ts">
interface Job {
  title: string
  salary: string
  status: 'Open' | 'Closed'
}

defineProps<{
  job: Job
}>();
</script>
