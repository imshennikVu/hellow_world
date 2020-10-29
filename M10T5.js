// решение 1
let arr = [1, 3, 5, 6, 78];
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
console.log(arr[i]);
}

// решение 2
let arr = [1, 3, 5, 6, 78];
console.log(arr.length);
arr.forEach(function(item, index, array) {
  console.log(item);
});
