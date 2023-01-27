const list = [
  {
    id: 1,
    name: "Gạo nếp 1kg",
    price: 40000,
    type: "rice",
    image: "../assets/gạo nếp.jpg",
  },
  {
    id: 2,
    name: "Lá dong",
    price: 20000,
    type: "leaves",
    image: "../assets/lá dong.jpg",
  },
  {
    id: 3,
    name: "Thịt heo 500g",
    price: 89000,
    type: "meat",
    image: "../assets/thịt heo.png",
  },
  {
    id: 4,
    name: "Gạo ST25 5kg",
    price: 190000,
    type: "rice",
    image: "../assets/gạo ST25.jpg",
  },
  {
    id: 5,
    name: "Đậu xanh không vỏ 300g",
    price: 19000,
    type: "others",
    image: "../assets/đậu xanh không vỏ.jpg",
  },
  {
    id: 6,
    name: "1 vỉ trứng gà",
    price: 60000,
    type: "others",
    image: "../assets/trứng.png",
  },
  {
    id: 7,
    name: "Gà nguyên con",
    price: 37900,
    type: "meat",
    image: "../assets/thịt gà.jpg",
  },
  {
    id: 8,
    name: "Củ kiệu sơ chế",
    price: 85000,
    type: "others",
    image: "../assets/củ kiệu sơ chế.jpg",
  },
  {
    id: 9,
    name: "Chả lụa 500g",
    price: 90000,
    type: "cha",
    image: "../assets/chả lụa.jpg",
  },
  {
    id: 10,
    name: "Nước mắm Nam Ngư",
    price: 30000,
    type: "spice",
    image: "../assets/nước mắm.jpg",
  },
  {
    id: 11,
    name: "Lá chuối 1kg",
    price: 25000,
    type: "leaves",
    image: "../assets/lá chuối.jpg",
  },
  {
    id: 12,
    name: "Chả lụa bì 200g",
    price: 49000,
    type: "cha",
    image: "../assets/chả lụa bì.jpg",
  },
];

// // Lưu vào localStorage
// localStorage.setItem("list", JSON.stringify(list));

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const id = params.id;
const product = list[id]
if (product === undefined) {
  document.write("Product not found");
} else {
  document.write(`
      <h1>${product.name}</h1>
  `);
}
// /**
//  * Thêm chức năng thêm vào giỏ hàng
//  */
// // var muaBtns = document.querySelectorAll(".san-pham .mua button");
// var giohang = document.querySelector("#gio-hang");
// /**
//  * Duyệt qua từng phần tử ở trong muaBtns, mỗi lần duyệt thì đem
//  * button tương ứng đặt vào biến btn (do chúng ta đặt tên)
//  */
// muaBtns.forEach(function (btn) {
//   btn.onclick = function (e) {
//     var tenSP = btn.parentElement
//     localStorage.setItem(JSON.stringify(tenSP),  )
//   };
// });
