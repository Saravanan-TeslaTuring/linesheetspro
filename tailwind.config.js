module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },    
    fontFamily:{
      sans : ['poppins']
    },
    extend: {
      colors:{
        purple: '#5a68c2',
        red : '#F0404C',
        yarrow : '#fdcb6e',
        violet : '#DF99CA',
        green : '#7CF29C',
        gray : '#F2F4F7',
        textGray : '#777',
        titleHeader: '#404857',
        statsBackground: '#f6f8fc',
        header: '#404857'
      },
      height:{
        'h-1/6': '10.666667%',
        'h-2/6': '34.333333%',
        'h-3/6': '54%'
      },
      backgroundImage:{
        'banner': "url('/src/assets/images/banner.webp')",
        'bannerdark': "url('/src/assets/images/bg.jpg')",
        'bannerleft': "url('/src/assets/images/1.png')",
        'bannerright': "url('/src/assets/images/secondright.png')",
      },
    },
  },
  plugins: [],
}
