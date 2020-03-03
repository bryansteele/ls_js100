let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// Both snippets iterate over the keys of myObj, but for..in iterates over all of the keys in the object, including those in the prototype object, myProtoObj

for (let key in myObj) {
  console.log(key);
}