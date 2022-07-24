/** @type {import('prettier').Config} */
module.exports = {
  bracketSpacing: false,
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-organize-imports')
  ]
}
