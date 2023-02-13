const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const products = JSON.parse(localStorage.getItem("products"));
const id = params.id;
const product = products[id];
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
    addToCart(id);
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
