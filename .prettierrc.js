module.exports = {
  tabWidth: 2,
  printWidth: 80,
  endOfLine: 'auto',
  arrowParens: 'always',
  trailingComma: 'none',
  semi: false,
  useTabs: false,
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
