# ifErr

get rid of `if (err) throw err`

## install

```
npm install if-err
```

## usage

```javascript
var error = require('if-err');

asyncFunc(function (err) {
  error.if(err);
});

asyncFunc(function (err) {
  error.if(err, 'bad things happened');
});

asyncFunc(function (err, data) {
  error.if(err, 'bad things happened');
  error.ifNot(data, 'data wasn\'t returned');
});
```

## Contributors

- [Rhett Lowe](https://github.com/rhettl)
