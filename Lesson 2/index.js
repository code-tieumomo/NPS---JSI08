// Array (mảng)
// let arr = [1, 2, 3, 4, 5];
// Lấy ra độ dài của mảng (số lượng phần tử)
// console.log(arr.length);
// Lấy ra phần tử trong mảng => cần sử dụng chỉ số của phần tử đó
// console.log(arr[1]);

// Object (đối tượng)
// let obj = {
//     name: 'Nguyen Van A',
//     age: 20,
//     address: 'Ha Noi'
// };
// console.log(obj);
// Lấy ra giá trị của 1 thuộc tính trong object => sử dụng tên của thuộc tính đó
// console.log(obj.address);

// Hàm Object.assign()
// let target = {
//     a: 1,
//     b: 2
// }
// let source1 = {
//     c: 3,
//     d: 4
// }
// let source2 = {
//     a: 5,
//     c: 6
// }

// Tham số đầu tiên luôn luôn là target và theo sau là vô số sources
// let newObj = Object.assign(target, source1, source2);

// Hay được dùng khi muốn ghép nhiều Object với nhau
// newObj = Object.assign({}, source1, source2);
// console.log(newObj);

/**
 * Spread Syntax (...)
 */

// Để tìm max trong JS có 1 hàm: Math.max()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ...arr = 1,2,3,4,5,6,7,8,9,10
// console.log(Math.max(...arr));

function sum(a, b, c) {
    return a + b + c;
}
// ...arr = 1,2,3
console.log(sum(...arr));

// Copy và ghép nối mảng/object
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
// Copy
// ...arr1 = 1,2,3
// [...arr1] = [1,2,3]
console.log(arr1);
console.log(arr2);

// Ghép nối
// ...arr1 = 1,2,3
// ...arr2 = 1,2,3
// ...arr1,...arr2 = 1,2,3,1,2,3
// [...arr1,...arr2] = [1,2,3,1,2,3]
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Object
const obj1 = {
    name: "Nguyen Van A",
    age: 20,
};
const obj2 = {
    address: "Ha Noi",
};
// ...obj1 = name: "Nguyen Van A", age: 20
// ...obj2 = address: "Ha Noi"
// ...obj1,...obj2 = name: "Nguyen Van A", age: 20, address: "Ha Noi"
// {...obj1,...obj2} = {name: "Nguyen Van A", age: 20, address: "Ha Noi"}
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Biến chuỗi thành mảng
const str = "Hello World";
// ...str = H,e,l,l,o, ,W,o,r,l,d
const chars = [...str];
console.log(chars);

/**
 * Array map và Array filter
 */

// Các hàm Array được dùng cho các biến mảng
// Cú pháp: array.map() array.filter() array.reduce() array.forEach() ...

// Map: Dùng để duyệt qua từng phần tử trong mảng và thực hiện 1 hành động nào đó, và trả về mảng mới có số lượng phần tử giống hệt mảng gốc
// Cú pháp: array.map(function(item, index, array) {});
// map nhận vào 1 hàm khác để làm tham số cho mình
const arrOri = [1, 2, 3, 4, 5];
// item: phần tử hiện tại
// index: chỉ số của phần tử hiện tại
// array: mảng gốc
// map bắt buộc phải return để trả ra dữ liệu cho mảng mới
// const arrNew = arrOri.map((item, index, array) => {
//     return item * index;
// });
const arrNew = arrOri.map((item, index, array) => item * index);
console.log(arrNew);
// Tương đương với arrOri.map(function() {});

// Filter: Dùng để lọc ra các phần tử thỏa mãn điều kiện nào đó, và trả về mảng mới có số lượng phần tử nhỏ hơn hoặc bằng mảng gốc
// Từ mảng gốc lọc ra các phần tử lớn hơn 2
// Cú pháp: array.filter(function(item, index, array) {});
// item: phần tử hiện tại
// index: chỉ số của phần tử hiện tại
// array: mảng gốc
// filter bắt buộc phải return để trả ra dữ liệu cho mảng mới
const arrFiltered = arrOri.filter((item, index, array) => {
    // viết logic ktra ở đây, nếu thỏa mãn thì return true để trả về item vào mảng mới, ngược lại return false sẽ không trả về item
    if (item > 2) {
        return true;
    } else {
        return false;
    }
});
console.log(arrFiltered);

// VD
const products = [
    {
        id: 1,
        price: 12,
        sale: 10,
        color: "red",
    },
    {
        id: 2,
        price: 10,
        sale: 0,
        color: "blue",
    },
];

console.log(products);
const mappedProducts = products.map((item) => {
    item.newPrice = `$${(item.price * item.sale) / 100}`;

    return item;
});
console.log(mappedProducts);

const redProducts = products.filter((item) => {
    if (item.color === "red") {
        return true;
    } else {
        return false;
    }
});
console.log(redProducts);
