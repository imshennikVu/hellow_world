let arr = [5, 4, 'fgh' , 1, 3, null, 8, '@', 5, 'gh'];
console.log(arr);
/* считаем количество типов данных, которые мы хотим фильтровать.
создаем массив со строковымми значениями.
элементов массива  должнобыть столько же сколько типов данных.
Далее будут использоваться как сами строковые данные,
так и длинна массива*/
let arrTxt = [
'Количество четных элементов: ',
'Количество не четных элементов: ',
'Количество нулевых элементов: ',
'Количество не числовых элементов: ']

/*проверяем данные, присваиваем каждому типу данных (чет\не чет\NaN\null)
id (см. расшифровку id ниже) переписываем массив,
 заменяя изначальные данные айдишниками типов данных.*/
for (var i = 0; i < arr.length; i++) {
  if (isNaN (arr [i])) {
    arr[i] = 3                     // 3-обозначение для NaN
  } else if (arr[i] == null) {
    arr[i] = 2                     //2 - обозначение для null
  } else { ( arr[i] = arr[i] & 1)
        if (arr[i] == 0) {        // 0 - четные
      arr[i] = 0
      } else {                    // 1 - не четные
      arr[i] = 1      }
          }
}

/* фильтруем массив по типу эллемента.
создаем новый массив с элементами одного типа.
вычисляем длинну нового массива.
записываем длинну  нового массива в массив arrRes.
выполняем следующую итерацию.
Переменная к - длинна массива arrTxt.
*/
let arrRes = []
for (let k = 0; k < arrTxt.length; k++) {
  arrRes.push (
  arr.filter(i => i === k).length
)}

/* при помощи цикла выводим сообщения.
Тк изначально массив arrTxt и arrRes проектировались
одного размера и соответствующими id элементов
то переменная f будет общей. можно просто склеить элементы*/
for (let f = 0; f < arrRes.length; f++) {
  console.log(arrTxt[f] + arrRes[f])
}
