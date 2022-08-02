const base = require('./without-type-checking')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...base,
  extends: [
    ...base.extends,
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
}
