let num = prompt ('enter num')
console.log(num);
num = + (num) // преобразуем в число, проверка number не требуется, тк все значения будут number
console.log(typeof (num)); // все равно выводим проверку, тк проверка дана в задаче
if (isNaN (num)) {
  console.log('Упс, кажется, вы ошиблись'); // если ввели не число, то выпадает NaN  - сообщаем об ошибке
} else {
  num = ( num & 1 ) // проверка на четность через побитовый &
   if (num == 0) {
   console.log('четное');
  } else {
   console.log('не четное');
  }
}