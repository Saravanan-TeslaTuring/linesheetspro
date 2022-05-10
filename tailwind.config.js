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
        header: '#404857',
        border: '#e4e7ea',
        purpleFrom: 'rgba(85,41,198,1)',
        purpleBtw: 'rgba(124,69,214,1)',
        purpleTo: 'rgba(158,92,226,1)',
        light: '#a9a9c0',
        // gradient: 'linear-gradient(90deg, rgba(85,41,198,1) 0%, rgba(124,69,214,1) 35%, rgba(158,92,226,1) 100%);'
      },
      height:{
        'h-1/6': '10.666667%',
        'h-2/6': '34.333333%',
        'h-3/6': '54%'
      },
      boxShadow:{
        'custom' : '0 4px 12px #5a68c24d',
      },
      backgroundImage:{
        'banner': "url('/src/assets/images/banner5.png')",
        'bannerdark': "url('/src/assets/images/bg.jpg')",
        'collection': "url('/src/assets/images/collection.svg')",
        'bannerleft': "url('/src/assets/images/1.png')",
        'bannerright': "url('/src/assets/images/secondright.png')",
      },
    },
  },
  plugins: [],
}
