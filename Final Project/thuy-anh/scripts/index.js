if (localStorage.getItem("products") == null) {
  const list = [
    {
      id: 0,
      name: "Gạo nếp 1kg",
      price: 40000,
      type: "rice",
      image: "../assets/gạo nếp.jpg",
      stripeId: "price_1MXz4HIUvPZxN8XgPuXU7kJF",
    },
    {
      id: 1,
      name: "Lá dong",
      price: 20000,
      type: "leaves",
      image: "../assets/lá dong.jpg",
      stripeId: "price_1MXzDUIUvPZxN8XgmdVfY2Vk",
    },
    {
      id: 2,
      name: "Thịt heo 500g",
      price: 89000,
      type: "meat",
      image: "../assets/thịt heo.png",
      stripeId: "price_1MaAbhIUvPZxN8XgFfQ4lxDz",
    },
    {
      id: 3,
      name: "Gạo ST25 5kg",
      price: 190000,
      type: "rice",
      image: "../assets/gạo ST25.jpg",
      stripeId: "price_1MaAewIUvPZxN8XgPTYqLuOA",
    },
    {
      id: 4,
      name: "Đậu xanh không vỏ 300g",
      price: 19000,
      type: "others",
      image: "../assets/đậu xanh không vỏ.jpg",
      stripeId: "price_1MaAfUIUvPZxN8Xgxqvcu8Ns",
    },
    {
      id: 5,
      name: "1 vỉ trứng gà",
      price: 60000,
      type: "others",
      image: "../assets/trứng.png",
      stripeId: "price_1MaAfxIUvPZxN8XgCphniPs5",
    },
    {
      id: 6,
      name: "Gà nguyên con",
      price: 37900,
      type: "meat",
      image: "../assets/thịt gà.jpg",
      stripeId: "price_1MaAgOIUvPZxN8XgpQH04S3x",
    },
    {
      id: 7,
      name: "Củ kiệu sơ chế",
      price: 85000,
      type: "others",
      image: "../assets/củ kiệu sơ chế.jpg",
      stripeId: "price_1MaAgpIUvPZxN8XgmUtsnLMR",
    },
    {
      id: 8,
      name: "Chả lụa 500g",
      price: 90000,
      type: "cha",
      image: "../assets/chả lụa.jpg",
      stripeId: "price_1MaAhMIUvPZxN8XgUOKfJtFZ",
    },
    {
      id: 9,
      name: "Nước mắm Nam Ngư",
      price: 30000,
      type: "spice",
      image: "../assets/nước mắm.jpg",
      stripeId: "price_1MaAhhIUvPZxN8XgnAkzlKsg",
    },
    {
      id: 10,
      name: "Lá chuối 1kg",
      price: 25000,
      type: "leaves",
      image: "../assets/lá chuối.jpg",
      stripeId: "price_1MaAiBIUvPZxN8XgpgatlR5H",
    },
    {
      id: 11,
      name: "Chả lụa bì 200g",
      price: 49000,
      type: "cha",
      image: "../assets/chả lụa bì.jpg",
      stripeId: "price_1MaAiYIUvPZxN8XgCqHPB30D",
    },
  ];
  localStorage.setItem("products", JSON.stringify(list));
}

/**
 * LOADING OVERLAY
 */
// Xảy ra khi HTML trên trang load xong
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("overlay").remove();
//   const start = performance.now();
//   for (let index = 0; index < 2000000000; index++) {}
//   const end = performance.now();
//   console.log("Thời gian chạy: ", end - start);
// });

// Xảy ra khi tất cả các tài nguyên trên trang load xong
window.addEventListener("load", function () {
  document.getElementById("overlay").remove();
});

// DROPDOWN APPEARANCE EFFECT
// jQuery(document).ready(function () {
//   $(".dropdown").hover(
//     function () {
//       $(".dropdown-menu", this).fadeIn(300);
//     },
//     function () {
//       $(".dropdown-menu", this).fadeOut(300);
//     }
//   );
// });

// AOS
AOS.init({
  duration: 700,
  offset: 50,
});

console.log(
  `%c ༼ つ ◕_◕ ༽つ %c ✔ home.js %c`,
  "background:#35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff; display: inline-block;",
  `background: green; padding: 1px; border-radius: 0 3px 3px 0; color: #fff; display: inline-block;`,
  "background:transparent"
);

// Xảy ra khi HTML trên trang load xong
document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById("overlay").remove();
  // const start = performance.now();
  // for (let index = 0; index < 2000000000; index++) {}
  // const end = performance.now();
  // console.log("Thời gian chạy: ", end - start);

  // Kiểm tra đăng nhập
  if (localStorage.getItem("user") == null) {
    document.querySelector("#cart").remove();
  } else {
    // Nếu đã đăng nhập
    const user = JSON.parse(localStorage.getItem("user"));

    document.querySelector("#nav-log").remove();
    document.querySelector("#cart img").src = user.photoURL;
  }
});

// Xảy ra khi tất cả các tài nguyên trên trang load xong
window.addEventListener("load", function () {
  // document.getElementById("overlay").remove();
});

function addToCart(id) {
  let user = JSON.parse(localStorage.getItem("user"));
  const cartName = `cart-${user.uid}`;
  let cart = JSON.parse(localStorage.getItem(cartName)) || [];
  
  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const index = cart.findIndex(function (item) {
    return item.id == id;
  });
  if (index < 0) cart.push({ id: id, quantity: 1 });
  else cart[index].quantity += 1;

  localStorage.setItem(cartName, JSON.stringify(cart));

  Toastify({
    text: "Thêm vào giỏ hàng thành công!",
    duration: 2500,
    destination: "/Final%20Project/thuy-anh/pages/cart.html",
    newWindow: false,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#fff",
      color: "#000",
      border: "1px solid #000",
      fontWeight: "bold",
    },
  }).showToast();
}
