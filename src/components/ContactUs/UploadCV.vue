<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Upload CV<span class="text-red-500 ml-0.5">*</span>
    </label>
    <div class="w-full h-30 rounded-xl border border-dashed border-gray-300 px-4
      focus-within:border-pink-500 transition-colors cursor-pointer
      hover:border-pink-400 hover:bg-pink-50/30 flex items-center justify-center" @click="triggerFileInput"
      @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @drop.prevent="handleFileDrop"
      :class="{ 'border-pink-500 bg-pink-50/30': isDragging }">
      <input ref="fileInput" type="file" accept=".pdf,.doc,.docx" class="hidden" @change="handleFileChange" />
      <div class="text-center">
        <div v-if="!modelValue" class="space-y-2 flex flex-col items-center text-center">
          <img src="../../assets/ContactUs/gallery1.svg" alt="ref" width="34" height="34">
          <p class="text-sm text-gray-600">
            <span class="text-pink-500 font-medium">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
        </div>
        <div v-else class="flex items-center justify-between w-full gap-2">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
              <img src="../../assets/ContactUs/document.svg" alt="ref" width="26" height="26">
            </div>
            <div class="text-left flex-1">
              <p class="w-30.5 md:w-70 text-sm font-medium text-gray-700 truncate">{{ modelValue.name }}</p>
              <p class="text-xs text-gray-400">{{ formatFileSize(modelValue.size) }}</p>
            </div>
          </div>
          <div class="flex items-center shrink-0">
            <button type="button" @click.stop="openPreview"
              class="px-3 py-1.5 text-sm font-medium text-pink-500 border border-pink-500 rounded-lg
                hover:bg-pink-50 transition-colors">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
    <p v-if="fileError" class="mt-1 text-sm text-red-500">{{ fileError }}</p>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showPreview" class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="fixed inset-0 bg-black/50" @click="closePreview"></div>

          <div class="relative bg-white rounded-2xl shadow-2xl flex flex-col
            w-full max-w-3xl h-[85vh] overflow-hidden z-10">
            <div class="flex items-center justify-between px-5 py-3 border-b
              border-gray-200">
              <div class="flex items-center gap-2">
                <img src="../../assets/ContactUs/document.svg" alt="ref" width="26" height="26">
                <div>
                  <h3 class="font-semibold text-gray-800">CV Preview</h3>
                  <p class="text-xs text-gray-500">{{ modelValue?.name }}</p>
                </div>
              </div>
              <button type="button" @click="closePreview"
              class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100
                rounded-lg transition-colors">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div v-if="isPdfFile" ref="pdfContainer" class="flex-1 w-full bg-white overflow-auto pdf-container">
              <canvas v-for="pageNum in totalPages" :key="pageNum" :ref="(el) => setCanvasRef(el, pageNum)"
                class="pdf-page mx-auto block"></canvas>
            </div>

            <div v-else class="flex-1 flex flex-col items-center justify-center py-12">
              <svg class="h-16 w-16 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0
                  012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0
                  01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p class="text-gray-500 mb-4 text-sm">
                Word documents cannot be previewed directly.
              </p>
              <button type="button" @click="downloadFile" class="px-5 py-2 bg-pink-500 text-white text-sm rounded-xl
                hover:bg-pink-600 transition-colors">
                Download to View
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { toRef } from 'vue';
import useUploadCV from '@/composables/useUploadCV';

const props = defineProps({
  modelValue: {
    type: [File, null],
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

const {
  fileInput,
  pdfContainer,
  isDragging,
  fileError,
  showPreview,
  totalPages,
  isPdfFile,
  formatFileSize,
  setCanvasRef,
  triggerFileInput,
  handleFileChange,
  handleFileDrop,
  openPreview,
  closePreview,
  downloadFile,
} = useUploadCV({
  modelValue: toRef(props, 'modelValue'),
  onUpdate: (file) => emit('update:modelValue', file),
});
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

.pdf-container {
  padding: 20px;
}

.pdf-page {
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.pdf-page:last-child {
  margin-bottom: 0;
}
</style>
