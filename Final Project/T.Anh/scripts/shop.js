const list = [
  {
    id: 0,
    name: "Gạo nếp 1kg",
    price: 40000,
    type: "rice",
    image: "../assets/gạo nếp.jpg",
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
localStorage.setItem("products", JSON.stringify(list));

const products = JSON.parse(localStorage.getItem("products"));
const productsListElement = document.getElementById("products-list");

/**
 * Hàm chuyên dùng để render danh sách sản phẩm ra HTML
 *
 * @param {array} productsList Mảng chứa danh sách sản phẩm
 */
function render(productsList) {
  // Xóa hết các thẻ li cũ
  productsListElement.innerHTML = "";

  // forEach giống map() nhưng khác là chỉ duyệt chứ ko trả về
  productsList.forEach(function (element) {
    productsListElement.insertAdjacentHTML(
      // Vị trí chèn
      "beforeend",
      // Nội dung chèn
      `
          
      <li class="list-item ${element.type}"  data-price="${element.price}">
        <a 
        href="http://127.0.0.1:5500/Final%20Project/T.Anh/pages/product.html?id=${element.id}">
          <div class="overflow-hidden">
            <img class="product-img" src="${element.image}">
          </div>
          <div class="card-body d-flex flex-column text-center mt-3">
            <a 
            class="product-name justify-content-center mb-2" 
            href="http://127.0.0.1:5500/Final%20Project/T.Anh/pages/product.html?id=${element.id}">
            ${element.name}
            </a>
            <span class="product-price w-100 mb-2">${element.price}đ</span>
            <button class="border bg-transparent py-2 text-uppercase fw-semibold add-to-cart-btn">Thêm vào giỏ hàng</button>
          </div>
        </a>
      </li>
      `
    );
  });
}
render(products);

// ISOTOPE
var elem = document.querySelector(".list");
var iso = new Isotope(elem, {
  // options
  itemSelector: ".list-item",
  layoutMode: "fitRows",
  getSortData: {
    name: "a",
    price: "[data-price] parseInt",
  },
});

// Sắp xếp sản phẩm
const allPriceBtn = document.getElementById("original-order");
const priceAscBtn = document.getElementById("price-asc");
const priceDescBtn = document.getElementById("price-desc");
const nameAscBtn = document.getElementById("name-asc");
const nameDescBtn = document.getElementById("name-desc");

console.log(nameAscBtn);

priceAscBtn.onclick = function () {
  iso.arrange({ sortBy: "price", sortAscending: true });
};

priceDescBtn.onclick = function () {
  iso.arrange({ sortBy: "price", sortAscending: false });
};

nameAscBtn.onclick = function () {
  iso.arrange({ sortBy: "name", sortAscending: true });
};

nameDescBtn.onclick = function () {
  iso.arrange({ sortBy: "name", sortAscending: false });
};

allPriceBtn.onclick = function () {
  iso.arrange({ sortBy: "original-order" });
};

// Lọc sản phẩm theo thể loại
const allBtn = document.getElementById("all");
const riceBtn = document.getElementById("rice");
const leavesBtn = document.getElementById("leaves");
const meatBtn = document.getElementById("meat");
const chaBtn = document.getElementById("cha");
const spiceBtn = document.getElementById("spice");
const othersBtn = document.getElementById("others");

allBtn.onclick = function () {
  iso.arrange({ filter: "*" });
};
riceBtn.onclick = function () {
  iso.arrange({ filter: ".rice" });
};
leavesBtn.onclick = function () {
  iso.arrange({ filter: ".leaves" });
};
meatBtn.onclick = function () {
  iso.arrange({ filter: ".meat" });
};
chaBtn.onclick = function () {
  iso.arrange({ filter: ".cha" });
};
spiceBtn.onclick = function () {
  iso.arrange({ filter: ".spice" });
};
othersBtn.onclick = function () {
  iso.arrange({ filter: ".others" });
};

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
