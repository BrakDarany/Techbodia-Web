import vue from '@vitejs/plugin-vue'

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
