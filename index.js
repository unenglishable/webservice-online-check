var _ = require('lodash');
var Promise = require('bluebird');
var path = require('path');
var request = require(path.join(__dirname, 'promisified-request'));
var KeywordMismatchError = Promise.OperationalError;

// configured values
var minimumPasses = 7;

var test = function(testURL, testKeyword) {
  return request(testURL).spread(function(response, body) {
    if (body.indexOf(testKeyword) > -1) {
      return [testURL, response, body];
    }
    else {
      return Promise.reject(new KeywordMismatchError('Keyword not found in body.'));
    }
  });
};

module.exports = function(urls, keyword) {
  return Promise.map(urls, function(url) {
    return Promise.some([
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword),
      test(url, keyword)
    ], minimumPasses)
    .then(function() {
      return { url, status: 'online' };
    })
    .catch(Promise.AggregateError, function(errors) {
      return { url, status: 'offline', errors: _.uniqBy(errors, _.isEqual) };
    });
  });
};
