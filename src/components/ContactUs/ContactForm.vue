<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      </div>
      <FormInput
        v-model="form.firstName"
        label="Full Name"
        type="text"
      />

      <FormInput
        v-model="form.lastName"
        label="Phone Number"
        type="text"
      />

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Apply For
        </label>
        <select
          v-model="form.position"
          class="w-full rounded-xl border border-gray-200 px-4 py-3
          focus:border-pink-500 focus:outline-none transition-colors bg-white"
          :class="{ 'text-gray-400': !form.position }"
        >
          <option value="" disabled>Select a position</option>
          <option
            v-for="job in jobData"
            :key="job.jobTitle"
            :value="job.jobTitle"
          >
            {{ job.jobTitle }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Upload CV
        </label>
        <div
          class="w-full h-30 rounded-xl border border-dashed border-gray-300 px-4
          focus-within:border-pink-500 transition-colors cursor-pointer
          hover:border-pink-400 hover:bg-pink-50/30 flex items-center justify-center"
          @click="triggerFileInput"
          @dragover.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="handleFileDrop"
          :class="{ 'border-pink-500 bg-pink-50/30': isDragging }"
        >
          <input
            ref="fileInput"
            type="file"
            accept=".pdf,.doc,.docx"
            class="hidden"
            @change="handleFileChange"
          />
          <div class="text-center">
            <div v-if="!form.cvFile" class="space-y-2">
              <svg
                class="mx-auto h-10 w-10 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4
                  4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656
                  0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4
                  4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-sm text-gray-600">
                <span class="text-pink-500 font-medium">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
            </div>
            <div v-else class="flex items-center justify-center gap-3">
              <svg
                class="h-6 w-6 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0
                  012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0
                  01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span class="text-sm text-gray-700">{{ form.cvFile.name }}</span>
              <button
                type="button"
                @click.stop="removeFile"
                class="text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p v-if="fileError" class="mt-1 text-sm text-red-500">{{ fileError }}</p>
      </div>

      <button
        type="submit"
        class="w-full btn-primary btn-rounded btn-hover-lift"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import jobData from '@/Data/JobData';
import FormInput from './FormInput.vue';

const emit = defineEmits(['submit']);

const fileInput = ref(null);
const isDragging = ref(false);
const fileError = ref('');

const allowedTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const maxFileSize = 5 * 1024 * 1024; // 5MB

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  position: '',
  message: '',
  cvFile: null,
});

const triggerFileInput = () => {
  fileInput.value?.click();
};

const validateFile = (file) => {
  fileError.value = '';

  if (!file) return false;

  if (!allowedTypes.includes(file.type)) {
    fileError.value = 'Please upload a PDF, DOC, or DOCX file.';
    return false;
  }

  if (file.size > maxFileSize) {
    fileError.value = 'File size must be less than 5MB.';
    return false;
  }

  return true;
};

const handleFileChange = (event) => {
  const file = event.target.files?.[0];
  if (file && validateFile(file)) {
    form.cvFile = file;
  }
};

const handleFileDrop = (event) => {
  isDragging.value = false;
  const file = event.dataTransfer.files?.[0];
  if (file && validateFile(file)) {
    form.cvFile = file;
  }
};

const removeFile = () => {
  form.cvFile = null;
  fileError.value = '';
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const submitForm = () => {
  emit('submit', { ...form });
};
</script>

<style scoped>

</style>
