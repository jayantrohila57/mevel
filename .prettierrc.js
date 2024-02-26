/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
/**
 * Prettier configuration object.
 *
 * Defines code formatting rules for Prettier.
 *
 * Exports an object with Prettier options to control formatting behavior.
 */
module.exports = {
  printWidth: 120,
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
  importOrder: ['^@core/(.*)$', '^[./]', '^@ui/(.*)$', '^@components/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ]
}
