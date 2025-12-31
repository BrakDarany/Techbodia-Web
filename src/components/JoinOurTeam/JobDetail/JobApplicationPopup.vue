<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.prevent>
        <!-- Backdrop (click to close disabled) -->
        <div class="fixed inset-0 bg-black/50"></div>

        <!-- Modal Content -->
        <div class="relative bg-white rounded-2xl shadow-2xl w-full md:w-xl z-10 max-h-[90vh] overflow-y-auto">
          <!-- Close Button -->
          <button
            type="button"
            @click="closePopup"
            class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors z-10"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Form -->
          <div class="p-8">
            <form @submit.prevent="handleSubmit" class="space-y-6">
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
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting || !isFormValid }"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import jobData from '@/Data/JobData';
import FormInput from '@/components/ContactUs/FormInput.vue';
import FormSelect from '@/components/ContactUs/FormSelect.vue';
import UploadCV from '@/components/ContactUs/UploadCV.vue';
import useJobApplication from '@/composables/useJobApplication';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  selectedJob: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close']);

const jobOptions = jobData.map((job) => ({
  value: job.jobTitle,
  label: job.jobTitle,
}));

const closePopup = () => {
  emit('close');
};

const {
  form,
  isFormValid,
  isSubmitting,
  submitSuccess,
  submitError,
  resetStatus,
  submitForm,
} = useJobApplication();

const handleSubmit = async () => {
  const success = await submitForm();
  if (success) {
    setTimeout(() => {
      closePopup();
    }, 1500);
  }
};

// Watch for selectedJob changes to pre-fill the position
watch(
  () => props.selectedJob,
  (newJob) => {
    if (newJob) {
      form.position = newJob;
    }
  },
  { immediate: true },
);

// Reset form when popup opens
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      resetStatus();
      if (props.selectedJob) {
        form.position = props.selectedJob;
      }
    }
  },
);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
