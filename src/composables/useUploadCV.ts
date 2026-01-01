import {
  ref,
  computed,
  onUnmounted,
  watch,
  nextTick,
  type Ref,
} from 'vue';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString();

interface UseUploadCVOptions {
  modelValue: Ref<File | null>;
  onUpdate: (file: File | null) => void;
}

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function useUploadCV(options: UseUploadCVOptions) {
  const { modelValue, onUpdate } = options;

  const fileInput = ref<HTMLInputElement | null>(null);
  const isDragging = ref(false);
  const fileError = ref('');
  const showPreview = ref(false);
  const previewUrl = ref('');
  const pdfContainer = ref<HTMLElement | null>(null);
  const totalPages = ref(0);
  const canvasRefs = ref<Record<number, HTMLCanvasElement>>({});
  let pdfDoc: pdfjsLib.PDFDocumentProxy | null = null;

  const isPdfFile = computed(() => modelValue.value?.type === 'application/pdf');

  const formatFileSize = (bytes: number | undefined): string => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  const setCanvasRef = (el: HTMLCanvasElement | null, pageNum: number) => {
    if (el) {
      canvasRefs.value[pageNum] = el;
    }
  };

  const renderPage = async (pageNum: number): Promise<void> => {
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
    if (!ctx) return;

    await page.render({
      canvasContext: ctx,
      viewport: scaledViewport,
      canvas,
    }).promise;
  };

  const loadPdf = async (): Promise<void> => {
    if (!modelValue.value || !isPdfFile.value) return;

    const arrayBuffer = await modelValue.value.arrayBuffer();
    pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    totalPages.value = pdfDoc.numPages;

    await nextTick();

    const renderPromises: Promise<void>[] = [];
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

  const triggerFileInput = (): void => {
    fileInput.value?.click();
  };

  const validateFile = (file: File | null): boolean => {
    fileError.value = '';

    if (!file) return false;

    if (!ALLOWED_TYPES.includes(file.type)) {
      fileError.value = 'Please upload a PDF, DOC, or DOCX file.';
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      fileError.value = 'File size must be less than 5MB.';
      return false;
    }

    return true;
  };

  const handleFileChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] || null;
    if (file && validateFile(file)) {
      onUpdate(file);
    }
  };

  const handleFileDrop = (event: DragEvent): void => {
    isDragging.value = false;
    const file = event.dataTransfer?.files?.[0] || null;
    if (file && validateFile(file)) {
      onUpdate(file);
    }
  };

  const openPreview = (): void => {
    if (modelValue.value) {
      previewUrl.value = URL.createObjectURL(modelValue.value);
      showPreview.value = true;
    }
  };

  const closePreview = (): void => {
    showPreview.value = false;
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value);
      previewUrl.value = '';
    }
  };

  const downloadFile = (): void => {
    if (modelValue.value) {
      const url = URL.createObjectURL(modelValue.value);
      const link = document.createElement('a');
      link.href = url;
      link.download = modelValue.value.name;
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

  return {
    // Refs
    fileInput,
    isDragging,
    fileError,
    showPreview,
    previewUrl,
    pdfContainer,
    totalPages,
    canvasRefs,

    // Computed
    isPdfFile,

    // Methods
    formatFileSize,
    setCanvasRef,
    triggerFileInput,
    handleFileChange,
    handleFileDrop,
    openPreview,
    closePreview,
    downloadFile,
  };
}
