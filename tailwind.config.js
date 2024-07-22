/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      square: 'square',
    },
    extend: {
      colors: {
        customGray: '#222222',
        customLightGray: '#E8E8E8',
        customGrayMd: '#4A4A4A',
        customBlack: '#080808',
        customRed: '#F40F34',
        activeTabButton: '#C9C9C9',
      },
      backgroundImage: {
        ourStory: "url('/ourStory/banner.png')",
      },
      
    },
  },
  plugins: [require('flowbite/plugin')],
}
