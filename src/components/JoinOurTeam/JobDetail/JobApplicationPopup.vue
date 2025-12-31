<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.prevent>
        <div class="fixed inset-0 bg-black/50"></div>

        <div class="relative bg-white rounded-2xl shadow-2xl w-full md:w-xl z-10 max-h-[90vh] overflow-y-auto">
          <button
            type="button"
            @click="closePopup"
            class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors z-10"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="p-8">
            <ContactForm
              ref="contactFormRef"
              :selected-position="selectedJob"
              :show-container="false"
              @submit="handleFormSubmit"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ContactForm from '@/components/ContactUs/ContactForm.vue';

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

const contactFormRef = ref<InstanceType<typeof ContactForm> | null>(null);

const closePopup = () => {
  emit('close');
};

const handleFormSubmit = () => {
  setTimeout(() => {
    closePopup();
  }, 1500);
};

// Reset form when popup opens
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      contactFormRef.value?.resetStatus();
      if (props.selectedJob) {
        contactFormRef.value?.setPosition(props.selectedJob);
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
