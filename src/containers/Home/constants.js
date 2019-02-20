
export const constants = {

  imageNum: 5,
  
  // Titles data
  titles: {
    data: [
      { parallaxdistance:35, animside: 'left', defaultTitle: 'Stefan Milenkovic' },
      { parallaxdistance:5,  animside: 'right', defaultTitle: 'Front-End' },
      { parallaxdistance:35, animside: 'left', defaultTitle: 'Web Developer' }
    ],
    secondary: {
      github:   ['Check out', 'My Github', 'Account'],
      linkedin: ['Check out', 'My LinkedIn', 'Account'],
      gmail:    ['Send me', 'an email', '(Click to copy)'],
      CV:       ['Read my', 'Personal', 'Resume (CV)']
    }
  },

  // Icons data
  icons: [
    { 
      icon: 'github', 
      link: 'https://github.com/stefaneran',
      parallaxdistance: 45
    },
    { 
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/stefan-eran-milenkovic-54a04b93',
      parallaxdistance: 45
    },
    { 
      icon: 'gmail',
      link: '',
      parallaxdistance: 45
    },
    { 
      icon: 'CV',
      link: 'https://docsend.com/view/9vwpmhu',
      parallaxdistance: 45
    }
  ],

  // Animations data
  animation: {
    offsets: {
      maxOffset: 45,
      maxRotate: 15,
      maxBgOffset: 8
    },
    delays: {
      before: 200,
      curtains_length: (500 + 50),
      text_length: (500 + 50),
      squaresEach: 100
    }
  }
}