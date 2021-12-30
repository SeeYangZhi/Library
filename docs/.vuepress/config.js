const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, '../books');
let book_array = [];
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (files) {
    book_array.push('/books/' + files);
  });
});

module.exports = {
  base: '/Library/',
  head: [['link', { rel: 'icon', href: 'assets/images/logo.svg' }]],
  // site config
  lang: 'en-US',
  title: 'My Library',
  description: 'This is a library of the books/articles I have read.',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'assets/images/logo.svg',
    darkMode: true,
    sidebar: book_array,
  },
};
