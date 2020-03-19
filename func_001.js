const concat = require('goss_concat');

function myConcat(a,b,c) {
  if ([a, b, c].some((g) => g < 0 || g > 255)) {
    return 'Error';
  }
  [a, b, c] = [a, b, c].map(g => g.toString(16).padStart(2,'0'));
  return concat('#', a, b, c);
}

console.log(myConcat(23,235,32))
console.log(myConcat(2,5,3))
console.log(myConcat(16,255,90))
console.log(myConcat(-2,257,0))

