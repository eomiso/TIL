// config.js file
// created date : 2019.10.28
// last modified : 2019.10.28
// author : eomiso

var CONST = require("./const");


module.exports = {
  title: "Eomiso's TIL(Today I Learned)",
  description: 'Write what you have learned today',
  base: "/TIL/",
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: '1. Python',
        children: CONST.PythonList
      },{
        title: '2. Git',
        children: CONST.GitList
      }
    ],
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/eomiso'
      },{
        text: 'Blog',
        link: 'https://eomiso.github.io'
      }
    ]
  }
}

