const list = [
  {
    id: 0,
    name: "Gạo nếp 1kg",
    price: 40000,
    type: "rice",
    image: "../assets/gạo nếp.jpg",
    stripe: "price_1MXz4HIUvPZxN8XgPuXU7kJF",
  },
  {
    id: 1,
    name: "Lá dong",
    price: 20000,
    type: "leaves",
    image: "../assets/lá dong.jpg",
  },
  {
    id: 2,
    name: "Thịt heo 500g",
    price: 89000,
    type: "meat",
    image: "../assets/thịt heo.png",
  },
  {
    id: 3,
    name: "Gạo ST25 5kg",
    price: 190000,
    type: "rice",
    image: "../assets/gạo ST25.jpg",
  },
  {
    id: 4,
    name: "Đậu xanh không vỏ 300g",
    price: 19000,
    type: "others",
    image: "../assets/đậu xanh không vỏ.jpg",
  },
  {
    id: 5,
    name: "1 vỉ trứng gà",
    price: 60000,
    type: "others",
    image: "../assets/trứng.png",
  },
  {
    id: 6,
    name: "Gà nguyên con",
    price: 37900,
    type: "meat",
    image: "../assets/thịt gà.jpg",
  },
  {
    id: 7,
    name: "Củ kiệu sơ chế",
    price: 85000,
    type: "others",
    image: "../assets/củ kiệu sơ chế.jpg",
  },
  {
    id: 8,
    name: "Chả lụa 500g",
    price: 90000,
    type: "cha",
    image: "../assets/chả lụa.jpg",
  },
  {
    id: 9,
    name: "Nước mắm Nam Ngư",
    price: 30000,
    type: "spice",
    image: "../assets/nước mắm.jpg",
  },
  {
    id: 10,
    name: "Lá chuối 1kg",
    price: 25000,
    type: "leaves",
    image: "../assets/lá chuối.jpg",
  },
  {
    id: 11,
    name: "Chả lụa bì 200g",
    price: 49000,
    type: "cha",
    image: "../assets/chả lụa bì.jpg",
  },
];

// Lưu vào localStorage
localStorage.setItem("list", JSON.stringify(list));

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const id = params.id;
const product = list[id];
const productImage = document.querySelector(".prod-imges");
const productName = document.querySelector(".prod-info");
const productPrice = document.querySelector("#product-price");
if (product === undefined) {
  document.write("Product not found");
} else {
  productImage.insertAdjacentHTML(
    "afterbegin",
    `<img class="main-img" src="${product.image}" alt="" />`
  );
  productName.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="prod-name text-uppercase fw-semibold text-black m-0">${product.name}</h1>`
  );
  productPrice.insertAdjacentHTML(
    "afterbegin",
    `<h3 class="prod-price text-black">${product.price}đ</h3>
  `
  );
}

/**
 * Chức năng thêm vào giỏ hàng
 */
const muaBtns = document.querySelectorAll("#product-detail .prod-info button");
// var giohang = document.getElementById("gio-hang");
const giohang = document.querySelector("#shopping-cart");
/**
 * Duyệt qua từng phần tử ở trong muaBtns, mỗi lần duyệt thì đem
 * button tương ứng đặt vào biến btn (do chúng ta đặt tên)
 */
muaBtns.forEach(function (btn) {
  btn.onclick = function (e) {
    var tenSP = btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

    const spMoi = document.createElement("li");
    spMoi.textContent = tenSP;

    giohang.appendChild(spMoi);
    localStorage.setItem(tenSP, "1");
  };
});

// NAVBAR đổi màu
const navbarElement = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const position = window.scrollY;
  if (position >= 450) {
    navbarElement.classList.add("has-bg");
  } else {
    navbarElement.classList.remove("has-bg");
  }
});
