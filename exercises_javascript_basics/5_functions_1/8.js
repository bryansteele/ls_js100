function greet(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}


console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('pt'));
console.log(greet('de'));
console.log(greet('sv'));
console.log(greet('af'));