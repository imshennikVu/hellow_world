let x = truej
let typeX = (typeof (x));
console.log(typeX);
switch (typeX) {
  case 'string':
    console.log( 'X - строка')
    break;
  case 'number':
    console.log( 'X - число')
    break;
  case 'boolean':
    console.log( 'X - логический тип')
    break;
  default:
    console.log ('Тип x не определён')
}
