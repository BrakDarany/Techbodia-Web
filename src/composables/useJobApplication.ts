import { reactive, ref, computed } from 'vue';

interface JobApplicationForm {
  fullName: string;
  phoneNumber: string;
  position: string;
  cvFile: File | null;
}

export default function useJobApplication() {
  const BOT_TOKEN = '8566112318:AAH7JnPNw1Q9wEv0MlQ9jHKVcUtIiltM5e0';
  const CHAT_ID = '1032135167';

  const form = reactive<JobApplicationForm>({
    fullName: '',
    phoneNumber: '',
    position: '',
    cvFile: null,
  });

  const isSubmitting = ref(false);
  const submitSuccess = ref(false);
  const submitError = ref('');

  const isFormValid = computed(
    () => form.fullName.trim() !== ''
      && form.phoneNumber.trim() !== ''
      && form.position !== ''
      && form.cvFile !== null,
  );

  const resetForm = (defaultPosition = '') => {
    form.fullName = '';
    form.phoneNumber = '';
    form.position = defaultPosition;
    form.cvFile = null;
  };

  const resetStatus = () => {
    submitSuccess.value = false;
    submitError.value = '';
  };

  const buildMessage = (): string => `
    📋 New Job Application
    👤 Full Name: ${form.fullName}
    📞 Phone Number: ${form.phoneNumber}
    💼 Apply For: ${form.position || 'Not specified'}
    ---
    Sent from Techbodia Website`;

  const sendMessage = async (message: string): Promise<void> => {
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
  };

  const sendDocument = async (file: File, caption: string): Promise<void> => {
    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', file);
    formData.append('caption', caption);

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
      {
        method: 'POST',
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error('Failed to send CV');
    }
  };

  const submitForm = async (): Promise<boolean> => {
    isSubmitting.value = true;
    submitError.value = '';
    submitSuccess.value = false;

    try {
      const message = buildMessage();

      if (form.cvFile) {
        await sendDocument(form.cvFile, message);
      } else {
        await sendMessage(message);
      }

      submitSuccess.value = true;
      resetForm();

      return true;
    } catch (error) {
      console.error('Telegram send error:', error);
      submitError.value = 'Failed to send message. Please try again.';
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    form,
    isFormValid,
    isSubmitting,
    submitSuccess,
    submitError,
    resetForm,
    resetStatus,
    submitForm,
  };
}
