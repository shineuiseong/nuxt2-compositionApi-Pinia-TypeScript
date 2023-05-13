module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debug': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // package.json에 없는 패키지를 import 시도시 에러 (230213 현재 vuex)
    'import/no-extraneous-dependencies': 'off',
    // export 사용시 에러나서 이 부분 추가
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    // TS에서 enum 쓸 때 에러 처리 (230310)
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowSpacing: ['error', { before: true, after: true }],
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto'
      }
    ],
    'global-require': 0 // require 로 이미지 경로 표기시 에러
  }
}
