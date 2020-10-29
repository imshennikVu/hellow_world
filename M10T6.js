// для числовых данных
let arr = [6, 6, 6, 6, 6, 6, 6, 6];
let sumArr = arr.reduce (function (sum,  item) {
  return sum + item
} );
console.log(sumArr);
if (sumArr / arr.length === arr [1]) {
  console.log('true');
} else {
  console.log('false');
}

// общее решение
let arr = ['sds', 'sds', 'sds', 'sds'];
let check = arr.map(function(item) {
 return (arr[0] === item);
});
let condition = el => el === true;
console.log(check.every(condition));
