module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off', // Disable the prefer default export rule
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'semi': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'max-len': 'off',
    'no-eval': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/no-unused-vars': 'off',



  }
};
