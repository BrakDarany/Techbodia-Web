<template>
  <div
    class="flex items-center gap-3 p-4 rounded-lg
           bg-pink-50/30 border border-pink-100
           hover:bg-pink-50 hover:border-pink-200
           transition-all duration-200 cursor-default"
  >
    <!-- Icon -->
    <div class="mt-0.5 flex h-8 w-8 items-center justify-center text-pink-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>

    <p class="text-sm text-center font-medium text-gray-700 leading-relaxed">
      7 paid wedding leave (includes Saturday &amp; Sunday)
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
