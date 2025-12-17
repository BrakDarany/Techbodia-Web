<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          v-model="form.firstName"
          label="First Name"
          type="text"
          placeholder="John"
        />

        <FormInput
          v-model="form.lastName"
          label="Last Name"
          type="text"
          placeholder="Doe"
        />
      </div>

      <FormInput
        v-model="form.email"
        label="Email Address"
        type="email"
        placeholder="john@example.com"
      />

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          v-model="form.message"
          rows="5"
          placeholder="Tell us about your project..."
          class="w-full rounded-xl border border-gray-200 px-4 py-3
         focus:border-pink-500 focus:outline-none transition-colors resize-none"
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
import FormInput from './FormInput.vue';

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
