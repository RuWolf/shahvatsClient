/* eslint-disable @typescript-eslint/no-var-requires */
// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.tsx'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    /* require('postcss-nested'), */
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [autoprefixer, purgecss] : []),
  ],
}
