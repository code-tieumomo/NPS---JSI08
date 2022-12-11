# Lưu ý khi code

## Cấu trúc thư mục

```bash
Tên nhóm
├── index.html
├── README.md (note những thông tin quan trọng cho sản phẩm của mình)
├── pages (code các trang html khác trong đây)
│   ├── login.html
│   ├── register.html
│   └── *.html
├── assets (chứa các file img, font, ...)
├── styles (chứa các file css)
|   ├── index.css (styles chung nhất, mà ở page nào cũng dùng)
|   ├── login.css
|   ├── register.css
|   └── *.css
├── scripts (chứa các file js)
|   ├── index.js (js chung nhất, mà ở page nào cũng dùng)
|   ├── login.js
|   ├── register.js
|   └── *.js
└── vendors (chứa thư viện css, js từ bên ngoài, không bao giờ sửa đổi)
    ├── bootstrap.js
    ├── bootstrap.css
    ├── swiper.css
    └── swiper.js
```

## Một số lưu ý khi code html

### Sắp xếp các file css, js

-   Vendors luôn luôn được thêm trước ở trên thẻ head (bởi vì các thư viện luôn phải sẵn sàng để sử dụng trong các file scripts)
-   Styles luôn luôn được thêm sau vendors ở trên thẻ head (để các styles sẽ sẵn sàng khi trang được load, tránh FOUC)
    -   `index.css` luôn được thêm đầu tiên
    -   `*.css` được thêm theo thứ tự abc
-   Scripts luôn luôn được thêm trước thẻ đóng body (để HTML được load xong, DOM sẵn sàng)
    -   `index.js` luôn được thêm đầu tiên
    -   `*.js` được thêm theo thứ tự abc

### Link css, js, image, ...

-   Luôn bắt đầu đường link href, src bằng `./`, sau đó mới đi lần lượt đến các file tương ứng
    -   `./` đại diện cho thư mục hiện tại

### Link anchor (thẻ `<a></a>`)

-   Luôn bắt đầu đường link bằng `/`, sau đó mới đi lần lượt đến các file tương ứng
    -   `/` đại diện cho thư mục gốc của project (nơi mà chứa index.html)

## Một số lưu ý khi code css

### Một số phần nên có trong file css

-   Cái gì chung nhất thì viết trong file index.css
    -   Reset css: [Normalize CSS](https://necolas.github.io/normalize.css/)
    -   Font chữ: [Google Fonts](https://fonts.google.com/) (nên thêm trên đầu file css bằng cú pháp `@import` và sau đó sẽ thêm `font-family` reset css của `body`)
-   Style cho từng trang thì viết trong file css tương ứng với trang đó, có comment rõ ràng từng phần
-   Có thể tham khảo một số preprocessors như [SCSS](https://sass-lang.com/)

## Một số lưu ý khi code js

### Một số phần nên có trong file js

-   Cái gì chung nhất thì viết trong file index.js
-   Script cho từng trang thì viết trong file js tương ứng với trang đó, có comment rõ ràng từng phần

# UI/UX của trang

-   Tham khảo các template thầy đã cho, tham khảo các template trên mạng để có ý tưởng về UI/UX của trang (các animation, các hiệu ứng, các chức năng, ...)
-   Nên có overlay cho trang (bỏ đi bằng JS sau khi đã load xong các phần cần thiết)
