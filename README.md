# GIT

## Tạo repo mới

-   Tạo repo trên Github
-   Clone repo về máy

    ```bash
    git clone https://github.com/code-tieumomo/NPS---JSI08.git
    ```

-   Tạo branch mới
    ```bash
    # Tạo nhánh mới
    git checkout -b <branch_name>
    # Chuyển nhánh
    git checkout <branch_name>
    ```

## Thêm git vào project có sẵn

-   Khởi tạo git

    ```bash
    git init
    ```

-   Thêm remote

    ```bash
    git remote add origin https://github.com/code-tieumomo/NPS---JSI08.git
    ```

-   Tạo branch mới

    ```bash
    # Tạo nhánh mới
    git checkout -b <branch_name>
    # Chuyển nhánh
    git checkout <branch_name>
    ```

## Quy trình làm việc

-   (Nếu làm nhóm) Pull code mới về

    ```bash
    git pull origin <branch_name>
    git pull
    # Pull code mới về nhưng bị cảnh báo: local changed chưa được commit
    ```

-   Kiểm tra trạng thái

    ```bash
    git status
    ```

-   Thêm file mới

    ```bash
    git add <file_name> <file_name> # ...
    git add . # Thêm tất cả những file mới + thay đổi
    ```

-   Commit

    ```bash
    git commit -m "message" # add index, update homepage, ...
    ```

-   Push code lên Github

    ```bash
    git push origin <branch_name>
    git push
    ```

# HTML, CSS

## HTML

```html
<tag-name attribute="value">content</tag-name> <img src="..." />
```

-   Tài liệu:
    -   [W3Schools](https://www.w3schools.com/tags/default.asp)
    -   [htmlreference.io](https://htmlreference.io/)

## CSS

Tập hợp của rất nhiều các thuộc tính để tạo style cho 1 hoặc nhiều element cụ thể

```css
selector {
    property: value;
}
```

### CSS Selector

-   Chọn ra các element theo tên thẻ: `h1`, `p`, `div`, `img`, ...
-   Chọn ra các element theo id: `#id`
-   Chọn ra các element theo class: `.class`
-   Chọn ra các element theo attribute: `[attribute]`, `[attribute=value]`, `[attribute="value"]`
-   Chọn ra các element theo thứ tự: `:first-child`, `:last-child`, `:nth-child(n)`, `:nth-last-child(n)`
-   Kết hợp các selector: `selector1 selector2`, `selector1, selector2`

```css
/* Chọn ra những thẻ a nằm trong thẻ p */
p a {
    color: red;
}
/* Chọn ra những thẻ p và thẻ a */
p,
a {
    color: red;
}
```

-   Kết hợp nhiều selector

```css
/* Chọn ra những thẻ p có id là para và class para */
p#para.para {
    color: red;
}
```

-   Nâng cao hơn 1 chút

    -   `selector1 > selector2`: Chọn ra những element con của selector1

    ```css
    /* Chọn ra những thẻ p con trực tiếp của thẻ div */
    div > p {
        color: red;
    }
    ```

    -   `selector1 selector2`: Chọn ra những element con của selector1

    ```css
    /* Chọn ra những thẻ p nằm trong thẻ div */
    div p {
        color: red;
    }
    ```

    -   `selector1 + selector2`: Chọn ra những element ngay sau selector1

    ```css
    /* Chọn ra những thẻ p ngay sau thẻ div */
    /* <div>    </div><p>    </p> */
    div + p {
        color: red;
    }
    ```

-   State
    -   `:hover`: Khi di chuột qua element
    -   `:active`: Khi click vào element
    -   `:focus`: Khi focus vào element

### CSS Property

-   Chia làm 2 phần:

    -   Tạo layout: flexbox, position, ...
    -   Tạo style cho từng element bên trong: font, color, background, border, ...

-   Tài liệu:
    -   [W3Schools](https://www.w3schools.com/cssref/default.asp)
    -   [cssreference.io](https://cssreference.io/)
    -   [flexboxfroggy.com](https://flexboxfroggy.com/)

# Javascript

## Biến, kiểu dữ liệu

```js
// Khai báo biến
let a = 1;
const b = "abc";
```

-   Kiểu dữ liệu:

    -   Number: `1`, `2`, `3`, ...
    -   String: `"abc"`, `'abc'`, `""`, `''`, ``
    -   Boolean: `true`, `false`
    -   Array: `[1, 2, 3]`, `["abc", "def"]`, `[true, false]`, `[1, 2, [1, 2, 3]`
    -   Object: `{}`, `{ name: "abc", age: 18 }`
    -   Function: `function() {}`, `() => {}`

-   Kiểm tra kiểu dữ liệu

    ```js
    console.log(typeof a); // number
    console.log(typeof b); // string
    ```

## Toán tử

+, -, \*, /, %, ++, --

## Điều kiện

```js
// condition => true/false
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}
```

## Vòng lặp

```js
for (
    // khai báo biến
    let i = 0;
    // điều kiện để lặp
    i < 10;
    // thay đổi biến sau mỗi lần lặp
    i = i + 1
) {
    // code
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

const arr = [1, 2, 3, 4, 5];
// Hàm mà dùng làm tham số được gọi là callback
arr.forEach((item) => {
    console.log(item); // 1, 2, 3, 4, 5
});
```

## Hàm

```js
// Khai báo hàm
function sum(a, b) {
    return a + b;
}

// Gọi hàm
sum(1, 2); // 3
```

## Array

```js
// Mảng luôn có index bắt đầu từ 0
const arr = [1, 2, 3, 4, 5];
// Lấy phần tử theo index
arr[0]; // 1
arr[1]; // 2
arr[4]; // 5
```

## Object

```js
const obj = {
    name: "abc",
    age: 18,
    address: {
        city: "HCM",
        district: "1",
    },
    hobbies: ["music", "sport"],
};

// Lấy giá trị theo key
obj.name; // "abc"
obj.age; // 18
obj.address.city; // "HCM"
obj.hobbies[0]; // "music"
```

## DOM

-   Chọn ra 1 hoặc nhiều element trong DOM

```js
const element = document.querySelector("CSS Selector");
const elements = document.querySelectorAll("CSS Selector");
// Duyệt elements
elements.forEach((element) => {
    // code
});
```

// Lấy giá trị, thuộc tính của element

-   Lấy giá trị (input, textarea, select, ...)

```js
element.value;
element.value.trim(); // Xóa khoảng trăng ở 2 đầu giá trị

element.getAttribute("attribute"); // element.getAttribute("href")
element.setAttribute("attribute", "value"); // element.setAttribute("href", "https://google.com")

element.classList.add("class"); // Thêm class
element.classList.remove("class"); // Xóa class
```

-   Thêm HTML, text vào element

```js
const element = document.querySelector("CSS Selector");
element.innerHTML = "abc"; // Set HTML bên trong element
element.innerText = "abc"; // Set text bên trong element
element.textContent = "abc"; // Set text bên trong element

// Dùng nhiều
element.insertAdjacentHTML(
    "beforestart|afterstart|beforeend|afterend",
    "<p>abc</p>"
);

// Dùng ít
element.innerHTML = element.innerHTML + "<p>abc</p>";
```

Xác định vị trí

```HTML
<!-- beforestart -->
<div>
    <!-- afterstart -->
    <p>abc</p>
    <p>abc</p>
    ....
    <p>abc</p>
    <p>abc</p>
    <!-- beforeend -->
</div>
<!-- afterend -->
```

## String literal

```js
// Cho phép tạo string multiline
const str = "abc";
const html = `
    <div>
        <p>${str}</p>
        <p>${1 + 1}</p>
        <p>abc</p>
    </div>
`;
console.log(html); // <div> <p>abc</p> <p>2</p> <p>abc</p> </div>
```

## Event

```js
const element = document.querySelector("CSS Selector");
element.addEventListener("sumbit|click|change", (event) => {
    // code
    event.preventDefault(); // Ngăn chặn hành vi mặc định của element (form thì sẽ chuyển trang, a thì sẽ chuyển trang, ...)
});
```

## Fetch

```js
const apiUrl = "https://jsonplaceholder.typicode.com/users";
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Tất cả logic với dữ liệu từ API phải viết trong then thứ 2
        console.log(data);
    });
```

## Local Storage

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();

// Lưu array, object
localStorage.setItem("mang", JSON.stringify([1, 2, 3]));
const arr = JSON.parse(localStorage.getItem("mang"));
```

# Setup

-   [VSCode](https://code.visualstudio.com/)
-   Live Server (VSCode extension)
-   Prettier (VSCode extension)
-   Bật Auto Save (Menu File > Auto Save), Bật Format on Save (Menu File > Preferences > Settings > Format on Save)
-   Cài browser (Chrome, Firefox, ...)
