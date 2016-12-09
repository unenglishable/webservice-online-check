var Promise = require('bluebird');
var request = require('request');

module.exports = function(requestInput) {
  return new Promise(function(resolve, reject) {
    request(requestInput, function(error, response, body) {
      if (error) {
        return reject(error);
      }
      else {
        return resolve([response, body]);
      }
    });
  });
};
