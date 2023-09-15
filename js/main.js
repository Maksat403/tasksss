//? 1. Дан массив let arr = [1, 2, 3, 4, 5, 6] - задача умножить четные числа в массиве на два.

// let arr = [1, 2, 3, 4, 5, 6];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr[i] *= 2;
//   }
// }
// console.log(arr);

//? Дан массив let names = ["Tom", "Jessica", "Richard", "Helen"]; добавьте слово hello перед каждым элементом массива

// let names = ["Tom", "Jessica", "Richard", "Helen"];
// for (i = 0; i < names.length; i++) {
//   names[i] = `hello ${names[i]}`;

//   //   names[i] += " hello";
// }
// console.log(names);

//?3. Дан массив let fruits = ["apple", "orange", "melon", "pineapple"]; Добавьте арбуз между orange и melon и распечатайте результат+++

// let fruits = ["apple", "orange", "melon", "pineapple"];
// fruits.splice(2, 0, "watermelon");
// console.log(fruits);

// Запросите у пользователя слово и число одним промптом, проверьте чтобы длина введенного слова была больше 5 символов и записана в верхнем регистре, а число должно быть больше 7. Eсли всё в порядке напишите "good job", в обратном случае "error"

//? 1. Дан массив let arr = [2, 54, 3, 234, 65, 84, 29, 45, 33, 28, 99]; Найдите и выведите в консоль самое большое число. Нельзя использовать модуль Math
// let arr = [2, 54, 3, 234, 65, 543, 84, 29, 45, 33, 28, 99];
// let maxNum = arr[0];
// console.log(arr.sort((a, b) => a - b)[arr.length - 1]);

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }
// console.log(maxNum);

//?
// 2. Дан массив let arr = ["hello", "javascript", "python", "makers", "array", "object", "function", "value", "tapochki"]; Переведите каждый третий элемент массива в верхний регистр

// let arr = [
//   "hello",
//   "javascript",
//   "python",
//   "makers",
//   "array",
//   "object",
//   "function",
//   "value",
//   "tapochki",
// ];
// for (i = 2; i < arr.length; i += 3) {
//   arr[i] = arr[i].toUpperCase();
// }
// console.log(arr);

// написать админку для интернет магазина - чтобы админ мог создавать товары с ключами: название, цена, описание
let db = [];
while (true) {
  let name = prompt("enter name");
  let price = prompt("enter price");
  let description = prompt("enter description");
  let obj = {
    name: name,
    price: price,
    description: description,
  };
  db.push(obj);
  console.log(db);
  let ans = confirm("want to stop?");
  if (ans === true) {
    break;
  }
}
