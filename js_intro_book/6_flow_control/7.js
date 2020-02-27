function allCaps(str) {
  if (str.length > 10) {
    console.log(str.toUpperCase());
    return str.toUpperCase();
  } else {
    console.log(str);
    return str;
  }
}

allCaps('Hello, World!');
allCaps('goodbye');