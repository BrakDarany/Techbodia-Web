<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            v-model="form.firstName"
            type="text"
            placeholder="John"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
         focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            v-model="form.lastName"
            type="text"
            placeholder="Doe"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
         focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          v-model="form.email"
          type="email"
          placeholder="john@example.com"
          class="w-full rounded-lg border border-gray-300 px-4 py-3
         focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          v-model="form.message"
          rows="5"
          placeholder="Tell us about your project..."
          class="w-full rounded-lg border border-gray-300 px-4 py-3
         focus:ring-2 focus:ring-pink-500 focus:outline-none  resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 rounded-xl transition"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['submit']);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
});

const submitForm = () => {
  emit('submit', { ...form });
};
</script>

<style scoped>

</style>
