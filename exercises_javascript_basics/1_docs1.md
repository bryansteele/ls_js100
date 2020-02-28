## Reading Documentation 1

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference]

2. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase]

3. No built-in method to capitalized the first letter.

4. `['fish', 'and', 'chips'][1];`
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array]

5. It would return `undefined`.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array]

6. 
```js
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];  // 'palm tree'
trees.pop();              // 'palm tree'
trees[trees.length - 1];  // 'sequoia'
```
`Array.length` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length]

`Array.prototype.pop()` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop]

7. 
```js
typeof 23.5;                // Number
typeof 'Call me Ishmael.';  // String
typeof false;               // Boolean
typeof 0;                   // Number
typeof null;                // Object
typeof undefined;           // undefined
```
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof]

8. 
```js
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;     // String
typeof words;     // Object
typeof isValid;   // Boolean

```
`String.prototype.split()` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]

`String length` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length]

`typeof` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof]

9. 
```js
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

tweet.split(' ');
// ["Starting", "to", "get", "the", "hang", "of", "it...", "#javascript", "#launchschool"]
tweet.split(' ').reverse();
// ["#launchschool", "#javascript", "it...", "of", "hang", "the", "get", "to", "Starting"]
tweet.split(' ').reverse().join(' ');
// '#launchschool #javascript it... of hang the get to Starting' 
```
`String.prototype.split()` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]

`Array.prototype.reverse()` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse]

`Array.prototype.join()` [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join]

10. 
```js
'8' == 8;   // true
'8' === 8;  // false
```
_Comparison operators_ [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity]