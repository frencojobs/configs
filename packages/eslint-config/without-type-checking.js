/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/array-type': ['warn', {default: 'array-simple'}],
  },
  extends: [
    // recommended eslint config
    'eslint:recommended',

    // from typescript-eslint plugin
    'plugin:@typescript-eslint/recommended',

    // make prettier work with eslint
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules', 'dist'],
  overrides: [
    {
      files: ['*.ts'],
      excludedFiles: ['*.test.ts', '*.spec.ts'],
      extends: [
        // enable strict rules only for non-test files
        'plugin:@typescript-eslint/strict',
      ],
    },
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
}
