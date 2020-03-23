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
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    sidebar: [
      {
        title: '1. Python',
        children: CONST.PythonList
      },{
        title: '2. Git',
        children: CONST.GitList
      },{
        title: '3. Java',
        children: CONST.JavaList
      },{
        title: '4. C++',
        children: CONST.CppList
      },{
        title: 'Mics.',
        children: CONST.MiscList
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
    ],
    lastUpdated: 'Last Updated', //string | boolean
  }
}

