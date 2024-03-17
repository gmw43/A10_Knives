const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Extend your Tailwind CSS theme with Material Tailwind styles here
    },
  },
  plugins: [],
})
