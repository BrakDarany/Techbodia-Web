<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      </div>
      <FormInput v-model="form.firstName" label="Full Name" type="text" />

      <FormInput v-model="form.lastName" label="Phone Number" type="text" />

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Apply For
        </label>

        <div class="relative">
          <select v-model="form.position" class="w-full appearance-none rounded-xl border border-gray-200
             pl-4 pr-12 py-3 bg-white
             focus:border-pink-500 focus:outline-none transition-colors" :class="{ 'text-gray-400': !form.position }">
            <option value="" disabled>Select a position</option>
            <option v-for="job in jobData" :key="job.jobTitle" :value="job.jobTitle">
              {{ job.jobTitle }}
            </option>
          </select>

          <div class="pointer-events-none absolute inset-y-0 right-4
                flex items-center text-gray-400">
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0
              111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Upload CV
        </label>
        <div class="w-full h-30 rounded-xl border border-dashed border-gray-300 px-4
          focus-within:border-pink-500 transition-colors cursor-pointer
          hover:border-pink-400 hover:bg-pink-50/30 flex items-center justify-center" @click="triggerFileInput"
          @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @drop.prevent="handleFileDrop"
          :class="{ 'border-pink-500 bg-pink-50/30': isDragging }">
          <input ref="fileInput" type="file" accept=".pdf,.doc,.docx" class="hidden" @change="handleFileChange" />
          <div class="text-center">
            <div v-if="!form.cvFile" class="space-y-2">
              <svg class="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4
                  4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656
                  0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4
                  4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="text-sm text-gray-600">
                <span class="text-pink-500 font-medium">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
            </div>
            <div v-else class="flex items-center justify-center gap-3">
              <svg class="h-6 w-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0
                  012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0
                  01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="text-sm text-gray-700">{{ form.cvFile.name }}</span>
              <button type="button" @click.stop="openPreview"
                class="text-pink-500 hover:text-pink-600 transition-colors" title="Preview CV">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
                    2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268
                    -2.943-9.542-7z" />
                </svg>
              </button>
              <button type="button" @click.stop="removeFile" class="text-gray-400 hover:text-red-500 transition-colors"
                title="Remove file">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p v-if="fileError" class="mt-1 text-sm text-red-500">{{ fileError }}</p>
      </div>

      <button type="submit" class="w-full btn-primary btn-rounded btn-hover-lift">
        Send Message
      </button>
    </form>

    <!-- CV Preview Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showPreview" class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black/50" @click="closePreview"></div>

          <!-- Modal Content -->
          <div class="relative bg-white rounded-2xl shadow-2xl flex flex-col
            w-full max-w-3xl h-[85vh] overflow-hidden z-10">
            <!-- Header -->
            <div class="flex items-center justify-between px-5 py-3 border-b
              border-gray-200">
              <div class="flex items-center gap-2">
                <svg class="h-5 w-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0
                    012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0
                    01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-800">CV Preview</h3>
                  <p class="text-xs text-gray-500">{{ form.cvFile?.name }}</p>
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

            <!-- PDF Preview -->
            <div v-if="isPdfFile" ref="pdfContainer" class="flex-1 w-full bg-white overflow-auto pdf-container">
              <canvas v-for="pageNum in totalPages" :key="pageNum" :ref="(el) => setCanvasRef(el, pageNum)"
                class="pdf-page mx-auto block"></canvas>
            </div>

            <!-- DOC/DOCX - Cannot preview, show download option -->
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
import {
  reactive,
  ref,
  computed,
  onUnmounted,
  watch,
  nextTick,
} from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as pdfjsLib from 'pdfjs-dist';
import jobData from '@/Data/JobData';
import FormInput from './FormInput.vue';

// Set PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString();

const emit = defineEmits(['submit']);

const fileInput = ref(null);
const isDragging = ref(false);
const fileError = ref('');
const showPreview = ref(false);
const previewUrl = ref('');
const pdfContainer = ref(null);
const totalPages = ref(0);
const canvasRefs = ref({});
let pdfDoc = null;

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

const isPdfFile = computed(() => form.cvFile?.type === 'application/pdf');

const setCanvasRef = (el, pageNum) => {
  if (el) {
    canvasRefs.value[pageNum] = el;
  }
};

const renderPage = async (pageNum) => {
  if (!pdfDoc) return;

  const page = await pdfDoc.getPage(pageNum);
  const canvas = canvasRefs.value[pageNum];
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const containerWidth = pdfContainer.value?.clientWidth || 700;
  const viewport = page.getViewport({ scale: 1 });
  const scale = (containerWidth - 40) / viewport.width;
  const scaledViewport = page.getViewport({ scale });

  // Account for device pixel ratio for sharp rendering on high-DPI screens
  const pixelRatio = window.devicePixelRatio || 1;

  canvas.width = scaledViewport.width * pixelRatio;
  canvas.height = scaledViewport.height * pixelRatio;

  // Set display size via CSS
  canvas.style.width = `${scaledViewport.width}px`;
  canvas.style.height = `${scaledViewport.height}px`;

  // Scale the context to account for the pixel ratio
  ctx.scale(pixelRatio, pixelRatio);

  await page.render({
    canvasContext: ctx,
    viewport: scaledViewport,
  }).promise;
};

const loadPdf = async () => {
  if (!form.cvFile || !isPdfFile.value) return;

  const arrayBuffer = await form.cvFile.arrayBuffer();
  pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  totalPages.value = pdfDoc.numPages;

  await nextTick();

  // Render all pages
  const renderPromises = [];
  for (let i = 1; i <= pdfDoc.numPages; i += 1) {
    renderPromises.push(renderPage(i));
  }
  await Promise.all(renderPromises);
};

watch(showPreview, async (newVal) => {
  if (newVal && isPdfFile.value) {
    await nextTick();
    await loadPdf();
  } else {
    totalPages.value = 0;
    canvasRefs.value = {};
    pdfDoc = null;
  }
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

const openPreview = () => {
  if (form.cvFile) {
    previewUrl.value = URL.createObjectURL(form.cvFile);
    showPreview.value = true;
  }
};

const closePreview = () => {
  showPreview.value = false;
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
    previewUrl.value = '';
  }
};

const downloadFile = () => {
  if (form.cvFile) {
    const url = URL.createObjectURL(form.cvFile);
    const link = document.createElement('a');
    link.href = url;
    link.download = form.cvFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

const removeFile = () => {
  closePreview();
  form.cvFile = null;
  fileError.value = '';
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const submitForm = () => {
  emit('submit', { ...form });
};

onUnmounted(() => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }
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
