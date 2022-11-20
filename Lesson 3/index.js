/**
 * Array reduce
 */

// Tính tổng của các phần tử trong mảng sau
const numbers = [1, 2, 3, 4, 5];

// Cách 1: Dùng vòng lặp for
let sum = 0;
for (let i = 0; i <= numbers.length - 1; i = i + 1) {
    sum += numbers[i];
}
console.log(sum);

// Cách 2: Dùng hàm reduce
let sumWithReduce = numbers.reduce(function (carry, element) {
    return carry + element;
}, 0);

/**
 * Split và join
 */

// Split: Dùng để chuyển 1 chuỗi thành mảng
const numbersInString = "1,2,3,4,5";
const numbersFromString = numbersInString.split(",");
console.log(numbersFromString);

// Join: Dùng để chuyển 1 mảng thành chuỗi
const stringFromNumbers = numbers.join(", ");
console.log(stringFromNumbers);

/**
 * Array includes: Dùng để kiểm tra xem 1 phần tử có tồn tại trong mảng hay không
 */

console.log(numbers);

// Kiểm tra số 3 có nằm trong mảng hay không
const isInNumbers = numbers.includes(3);
console.log(isInNumbers);

// Kiểm tra số 6 có nằm trong mảng hay không
const isNotInNumbers = numbers.includes(6);
console.log(isNotInNumbers);

/**
 * Bài tập
 */

// Bài 1:
arr1 = [1, 2, 4, 5, 6];
arr2 = [1, 6, 8, 9, 0];

let filteredArr1 = arr1.filter(function (item) {
    if (arr2.includes(item) == true) {
        return true;
    } else {
        return false;
    }
});

// Các rút gọn hơn
// filteredArr1 = arr1.filter((item) => arr2.includes(item));
console.log(filteredArr1);

// Bài 2:
arr = [1, 54, 6, 7];
let newArr = arr.map(function (item) {
    return item + 5;
});
// Cách rút gọn hơn
// newArr = arr.map((item) => item + 5);
console.log(newArr);

// Bài 3:
let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];

const l = [1, 8, 10, 96, 7];
const mFiltered = m.filter(function (item) {
    if (l.includes(item) == true) {
        return false;
    } else {
        return true;
    }
});
console.log(mFiltered);

const nFiltered = n.filter(function (item) {
    if (l.includes(item) == true) {
        return false;
    } else {
        return true;
    }
});
console.log(nFiltered);

// Bài 4
const players = [
    { id: 11, name: "Messi", age: 33 },
    { id: 12, name: "Ronaldo", age: 34 },
    { id: 13, name: "Young", age: 35 },
    { id: 14, name: "Mane", age: 21 },
    { id: 15, name: "Salah", age: 24 },
];

// playersModified = {
//     11: { id: 11, name: "Messi", age: 33 },
//     12: { id: 12, name: "Ronaldo", age: 34 },
//     13: { id: 13, name: "Young", age: 35 },
//     14: { id: 14, name: "Mane", age: 21 },
//     15: { id: 15, name: "Salah", age: 24 },
// };

// Cách 1: dùng forEach
let playersModified = {};
players.forEach(function (item) {
    playersModified[item.id] = item;
});
// console.log(playersModified);

// Cách 2: dùng reduce
playersModified = players.reduce(function (carry, item) {
    carry[item.id] = item;

    return carry;
}, {});
// console.log(playersModified);
