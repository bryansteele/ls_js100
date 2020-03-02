let str = 'launch school tech & talk';
let splitStr = str.split(' ')
              .map( (word) => word.charAt(0)
              .toUpperCase() + word.substring(1) )
              .join(' ');

console.log(splitStr);