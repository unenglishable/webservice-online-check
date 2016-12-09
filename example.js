var path = require('path');
var tester = require(path.join(__dirname, 'index'));

// inputs
var urls = [
  'https://google.com',
  'https://github.com',
  'https://bing.com' // bing doesn't have the word 'google' ANYWHERE in their page... how petty.
];
var keyword = 'google';

tester(urls, keyword)
.each(function(result) {
  if (result.status === 'online') {
    console.log(result.url, 'is online!');
  }
  else if (result.status === 'offline') {
    result.errors.forEach(function(error) {
      console.log(result.url, 'is offline:');
      console.log(error.stack);
    });
  }
  else {
    console.log('¯\\_(ツ)_/¯');
  }
});
