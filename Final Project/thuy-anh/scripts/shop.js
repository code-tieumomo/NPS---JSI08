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
          
      <div class="list-item ${element.type}"  data-price="${element.price}">
        <a 
        href="/Final%20Project/thuy-anh/pages/product.html?id=${element.id}">
          <div class="overflow-hidden">
            <img class="product-img" src="${element.image}">
          </div>
          <div class="card-body d-flex flex-column text-center mt-3">
            <a 
            class="product-name justify-content-center mb-2" 
            href="/Final%20Project/thuy-anh/pages/product.html?id=${element.id}">
            ${element.name}
            </a>
            <span class="product-price w-100 mb-2">${element.price}đ</span>
            <button data-id="${element.id}" class="border bg-transparent py-2 text-uppercase fw-semibold add-to-cart-btn">Thêm vào giỏ hàng</button>
          </div>
        </a>
      </div>
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

// /**
//  * Chức năng lọc, sắp xếp sản phẩm
//  */
//  const ascBtn = document.getElementById("asc");
//  const descBtn = document.getElementById("desc");
 
//  // onclick là thuộc tính của thẻ button, chứ không phải hàm
//  // onlick sẽ được gán bằng 1 function, function này sẽ chỉ có 1 tham số duy nhất đại diện cho sự kiện xảy ra
//  ascBtn.onclick = function () {
//      // Sắp xếp tăng dần
//      const sortedProducts = products.sort(function (a, b) {
//          if (a.price == b.price) {
//              // Nếu giá tiền bằng nhau, thì ko cần đổi chỗ a và b => return 0
//              return 0;
//          } else if (a.price > b.price) {
//              // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b => return 1
//              return 1;
//          } else {
//              // Nếu giá tiền của a nhỏ hơn b, thì ko cần đổi chỗ a và b => return -1
//              return -1;
//          }
//      });
 
//      // Sau khi sắp xếp xong, render lại danh sách sản phẩm
//      render(sortedProducts);
//  };
 
//  descBtn.onclick = function () {
//      const sortedProducts = products.sort(function (a, b) {
//          if (a.price == b.price) {
//              // Nếu giá tiền bằng nhau, thì ko cần đổi chỗ a và b => return 0
//              return 0;
//          } else if (a.price > b.price) {
//              // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b => return 1
//              return -1;
//          } else {
//              // Nếu giá tiền của a nhỏ hơn b, thì ko cần đổi chỗ a và b => return -1
//              return 1;
//          }
//      });
 
//      // Sau khi sắp xếp xong, render lại danh sách sản phẩm
//      render(sortedProducts);
//  };
 
//  const filterSelect = document.getElementById("filter");
//  filterSelect.onchange = function () {
//      const typeSlected = filterSelect.value;
//      let filteredProducts = [];
//      switch (typeSlected) {
//          case "sport":
//              filteredProducts = products.filter(function (element) {
//                  if (element.type == "sport") {
//                      return true;
//                  } else {
//                      return false;
//                  }
//              });
//              break;
 
//          case "casual":
//              filteredProducts = products.filter(function (element) {
//                  if (element.type == "casual") {
//                      return true;
//                  } else {
//                      return false;
//                  }
//              });
//              break;
 
//          default:
//              filteredProducts = products;
//              break;
//      }
//      render(filteredProducts);
//  };
 

/**
 * Chức năng thêm vào giỏ hàng
 */
const muaBtns = document.querySelectorAll(".list-item .card-body button");

/**
 * Duyệt qua từng phần tử ở trong muaBtns, mỗi lần duyệt thì đem
 * button tương ứng đặt vào biến btn (do chúng ta đặt tên)
 */
if (localStorage.getItem("user") != null) {
  muaBtns.forEach(function (btn) {
    btn.onclick = function (e) {
      // var tenSP = btn.previousElementSibling.previousElementSibling.textContent;
      const id = Number(btn.dataset.id);

      addToCart(id);
    };
  });
} else {
  muaBtns.forEach(function (btn) {
    btn.onclick = function (e) {
      window.location.href = "/Final%20Project/thuy-anh/pages/login.html";
    };
  });
}

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
