Vue.createApp({
  data() {
    return {
      sections: [
        {
          id: 1,
          title: 'Section 1',
          section: 'section1',
          content: 'Vue is a popular open source JavaScript framework. It\'s nicknamed the "Progressive Framework" because it\'s so easy to add it to preexisting projects.'
        },
        {
          id: 2,
          title: 'Section 2',
          section: 'section2',
          content: 'There\'s actually only one of these sections in the original HTML of this website. I\'m using vue to easily create duplicates of that template section.'
        },
        {
          id: 3,
          title: 'Section 3',
          section: 'section3',
          content: 'The fake images are here to space out each section so you can test the links in the navbar. You\'ll see that they correctly link to the corresponding section.'
        }
      ]
    }
  }
}).mount('#content')