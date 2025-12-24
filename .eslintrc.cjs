module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2022: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      '@nuxtjs/eslint-config-typescript',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Não encher o saco com console durante desenvolvimento
      'no-console': 'off',
  
      // Permite variáveis não usadas se começarem com _
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  
      // Vue / Nuxt
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
  
      // Estilo
      'prefer-const': 'warn',
      'no-var': 'error',
    },
  }
  