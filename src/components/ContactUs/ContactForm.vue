<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      </div>
      <FormInput v-model="form.firstName" label="Full Name" type="text" required />

      <FormInput v-model="form.lastName" label="Phone Number" type="text" required />

      <FormSelect
        v-model="form.position"
        label="Apply For"
        placeholder="Select a position"
        :options="jobOptions"
        required
      />

      <UploadCV v-model="form.cvFile" />

      <p v-if="submitSuccess" class="text-green-600 text-sm text-center">
        ✓ Application sent successfully!
      </p>
      <p v-if="submitError" class="text-red-500 text-sm text-center">
        {{ submitError }}
      </p>

      <button
        type="submit"
        class="w-full btn-primary btn-rounded btn-hover-lift"
        :disabled="isSubmitting || !isFormValid"
        :class="{ 'opacity-50 cursor-not-allowed': isSubmitting || !isFormValid }">
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import {
  reactive,
  ref,
  computed,
} from 'vue';
import jobData from '@/Data/JobData';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import UploadCV from './UploadCV.vue';

const jobOptions = jobData.map((job) => ({
  value: job.jobTitle,
  label: job.jobTitle,
}));

const emit = defineEmits(['submit']);

const form = reactive({
  firstName: '',
  lastName: '',
  position: '',
  cvFile: null,
});

const isFormValid = computed(
  () => form.firstName.trim() !== ''
    && form.lastName.trim() !== ''
    && form.position !== ''
    && form.cvFile !== null,
);

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const submitForm = async () => {
  // Telegram Bot configuration
  const BOT_TOKEN = '8566112318:AAH7JnPNw1Q9wEv0MlQ9jHKVcUtIiltM5e0';
  const CHAT_ID = '1032135167';

  // Build the message text
  const message = `📋 New Job Application

👤 Full Name: ${form.firstName}
📞 Phone Number: ${form.lastName}
💼 Apply For: ${form.position || 'Not specified'}
📎 CV: ${form.cvFile ? form.cvFile.name : 'Not attached'}

---
Sent from Techbodia Website`;

  isSubmitting.value = true;
  submitError.value = '';
  submitSuccess.value = false;

  try {
    // Send text message to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    // If there's a CV file, send it as a document
    if (form.cvFile) {
      const formData = new FormData();
      formData.append('chat_id', CHAT_ID);
      formData.append('document', form.cvFile);
      formData.append('caption', `CV for ${form.firstName}`);

      const docResponse = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!docResponse.ok) {
        throw new Error('Failed to send CV');
      }
    }

    submitSuccess.value = true;

    // Reset form after successful submission
    form.firstName = '';
    form.lastName = '';
    form.position = '';
    form.cvFile = null;

    emit('submit', { success: true });
  } catch (error) {
    console.error('Telegram send error:', error);
    submitError.value = 'Failed to send message. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
