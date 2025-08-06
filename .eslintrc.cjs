/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    // Disable some rules that might cause issues with Vue 3 Composition API
    'vue/multi-word-component-names': 'off',
  },
};
