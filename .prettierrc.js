/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
  printWidth: 80,
  endOfLine: 'auto',
  arrowParens: 'always',
  trailingComma: 'none',
  tabWidth: 2,
  bracketSameLine: true,
  jsxSingleQuote: true,
  quoteProps: 'consistent',
  singleAttributePerLine: true,
  useTabs: false,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ]
}
