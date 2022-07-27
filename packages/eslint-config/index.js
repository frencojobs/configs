/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // recommended eslint config
    'eslint:recommended',

    // from typescript-eslint plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',

    // make prettier work with eslint
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
