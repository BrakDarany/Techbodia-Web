<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}<span v-if="required" class="text-red-500 ml-0.5">*</span>
    </label>

    <div class="relative">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        class="w-full appearance-none rounded-xl border border-gray-200
          pl-4 pr-12 py-3 bg-white
          focus:border-pink-500 focus:outline-none transition-colors"
        :class="{ 'text-gray-400': !modelValue }"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
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
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
  options: {
    type: Array,
    required: true,
    // Expected format: [{ value: 'value1', label: 'Label 1' }, ...]
  },
  required: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
</style>
