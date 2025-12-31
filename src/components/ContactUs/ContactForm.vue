<template>
  <div :class="containerClass">
    <form @submit.prevent="submitForm" class="space-y-6">
      <FormInput v-model="form.fullName" label="Full Name" type="text" required />

      <FormInput v-model="form.phoneNumber" label="Phone Number" type="text" required />

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

<script setup lang="ts">
import { watch, computed } from 'vue';
import useJobApplication from '@/composables/useJobApplication';
import jobData from '@/Data/JobData';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import UploadCV from './UploadCV.vue';

const props = defineProps({
  selectedPosition: {
    type: String,
    default: '',
  },
  showContainer: {
    type: Boolean,
    default: true,
  },
});

const jobOptions = jobData.map((job) => ({
  value: job.jobTitle,
  label: job.jobTitle,
}));

const containerClass = computed(() => (props.showContainer ? 'bg-white rounded-2xl shadow-lg p-8' : ''));

const {
  form,
  isFormValid,
  isSubmitting,
  submitSuccess,
  submitError,
  submitForm,
} = useJobApplication();

watch(
  () => props.selectedPosition,
  (newPosition) => {
    if (newPosition) {
      form.position = newPosition;
    }
  },
  { immediate: true },
);
</script>
