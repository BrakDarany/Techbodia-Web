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
            <div class="text-left min-w-0 flex-1">
              <p class="text-sm font-medium text-gray-700 truncate">{{ modelValue.name }}</p>
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
import {
  ref,
  computed,
  onUnmounted,
  watch,
  nextTick,
} from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString();

const props = defineProps({
  modelValue: {
    type: [File, null],
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

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

const isPdfFile = computed(() => props.modelValue?.type === 'application/pdf');

const formatFileSize = (bytes) => {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
};

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

  const containerWidth = pdfContainer.value?.clientWidth || 700;
  const viewport = page.getViewport({ scale: 1 });
  const scale = (containerWidth - 40) / viewport.width;

  const pixelRatio = window.devicePixelRatio || 1;
  const scaledViewport = page.getViewport({ scale: scale * pixelRatio });

  canvas.width = scaledViewport.width;
  canvas.height = scaledViewport.height;

  canvas.style.width = `${scaledViewport.width / pixelRatio}px`;
  canvas.style.height = `${scaledViewport.height / pixelRatio}px`;

  const ctx = canvas.getContext('2d');

  await page.render({
    canvasContext: ctx,
    viewport: scaledViewport,
  }).promise;
};

const loadPdf = async () => {
  if (!props.modelValue || !isPdfFile.value) return;

  const arrayBuffer = await props.modelValue.arrayBuffer();
  pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  totalPages.value = pdfDoc.numPages;

  await nextTick();

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
    emit('update:modelValue', file);
  }
};

const handleFileDrop = (event) => {
  isDragging.value = false;
  const file = event.dataTransfer.files?.[0];
  if (file && validateFile(file)) {
    emit('update:modelValue', file);
  }
};

const openPreview = () => {
  if (props.modelValue) {
    previewUrl.value = URL.createObjectURL(props.modelValue);
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
  if (props.modelValue) {
    const url = URL.createObjectURL(props.modelValue);
    const link = document.createElement('a');
    link.href = url;
    link.download = props.modelValue.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
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
