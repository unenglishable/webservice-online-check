# webservice-online-check

For an example, see [example.js](example.js)

## Basic usage

```js
var check = require('webservice-online-check');
var urls = [ 'someurl', 'anotherurl' ];
var keyword = 'banana';

check(urls, keyword)
.each(function(result) {
  // do some stuff
});
```

* Checks each supplied URL for the specified `keyword`

  * Returns with `result.status = 'online'` only if URL is up and `keyword`
    was found.

  * Will not throw an error.  You must check `result.errors` manually.

* Uses `npm request`.  Your input can be whatever `request()` takes as an
  argument.

## Return values

```js
result.url <String> // the url you supplied

result.status <String> // 'online' OR 'offline'

result.errors [Array] // populated if 'offline'
                      // an array of any errors encountered
```
