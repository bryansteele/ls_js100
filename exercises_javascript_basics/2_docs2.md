## Reading Documentation 2

1. 
```js
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');
```
[https://github.com/airbnb/javascript]

2. 
* strings
* numbers
* booleans
* undefined
* null
* - bigint and symbol (that are not being talked about in course for now)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures]

3. `Number.MAX_VALUE;`
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE]

4. `4 * 5 + 3 ** 2 / 10           // ==> 20.9`
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence]

5. The `Date.now()` method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now]

6. `getYear()` is deprecated and you should avoid using it. It is being replaced with `getFullYear()`

`Date.prototype.getYear()` returns a number representing the year of the date on which it is invoked, minus 1900.

`Date.prototype.getFullYear()` returns a number representing the year of the date on which it is invoked.

7. It expects a single, optional argument: a string that will be used as separator. If the argument is omitted, the separator defaults to `','`. Any excess arguments passed to the method upon invocation are ignored.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join]

8. `String.prototype.concat()` and the `+` operator concatenate two or more strings, returning a new string.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat]

9. 
```js
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token]

10. 
```js
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}
```
It is expected to be a number, but it is being used as a function.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length]
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError]