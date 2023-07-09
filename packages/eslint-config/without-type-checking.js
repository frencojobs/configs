/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    // use Array<T> instead of T[] for complex types
    '@typescript-eslint/array-type': ['warn', {default: 'array-simple'}],
    // we'll allow _* for unused variables
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // we use const enums most of the time so enum comparisons are safe
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
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
