const list = [
  {
    id: 1,
    name: "Gạo nếp 1kg",
    price: 40000,
    type: "gạo",
    image: "../assets/gạo nếp.jpg",
  },
  {
    id: 2,
    name: "Lá dong",
    price: 20000,
    type: "lá gói bánh",
    image: "../assets/lá dong.jpg",
  },
  {
    id: 3,
    name: "Thịt heo 500g",
    price: 89000,
    type: "thịt",
    image: "../assets/thịt heo.png",
  },
  {
    id: 4,
    name: "Gạo ST25 5kg",
    price: 190000,
    type: "gạo",
    image: "../assets/gạo ST25.jpg",
  },
  {
    id: 5,
    name: "Đậu xanh không vỏ 300g",
    price: 19000,
    type: "khác",
    image: "../assets/đậu xanh không vỏ.jpg",
  },
  {
    id: 6,
    name: "1 vỉ trứng gà",
    price: 60000,
    type: "khác",
    image: "../assets/trứng.png",
  },
  {
    id: 7,
    name: "Gà nguyên con",
    price: 37900,
    type: "thịt",
    image: "../assets/thịt gà.jpg",
  },
  {
    id: 8,
    name: "Củ kiệu sơ chế",
    price: 85000,
    type: "khác",
    image: "../assets/củ kiệu sơ chế.jpg",
  },
  {
    id: 9,
    name: "Chả lụa 500g",
    price: 90000,
    type: "chả",
    image: "../assets/chả lụa.jpg",
  },
  {
    id: 10,
    name: "Nước mắm Nam Ngư",
    price: 30000,
    type: "gia vị",
    image: "../assets/nước mắm.jpg",
  },
  {
    id: 11,
    name: "Lá chuối 1kg",
    price: 25000,
    type: "lá gói bánh",
    image: "../assets/lá chuối.jpg",
  },
  {
    id: 12,
    name: "Chả lụa bì 200g",
    price: 49000,
    type: "chả",
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
          
      <li class="list-item"  data-price="${element.price}">
            <div class="overflow-hidden"><img class="product-img" src="${element.image}"></div>
            <div class="card-body">
            <a 
            class="product-name card-title" 
            href="http://127.0.0.1:5500/Product/product.html?id=${element.id}">
            ${element.name}
            </a>
            <span class="product-price">${element.price}đ</span>
            </div>
          </li>
      `
    );
  });
}
render(products);

// ISOTOPE
var elem = document.querySelector('.list');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.list-item',
  layoutMode: 'fitRows',
  getSortData: {
    price: "[data-price] parseInt", // text from querySelector
  }
});






const ascBtn = document.getElementById("asc");
const descBtn = document.getElementById("desc");

// onclick là thuộc tính của thẻ button, chứ ko phải hàm
// Onclick được gán bằng 1 function, fucntion này sẽ chỉ có 1 tham số duy nahát đại diện cho sự kiện xảy ra
ascBtn.onclick = function () {
  // Sắp xếp thứ tự giá tăng dần
  // const sortedProducts = products.sort(function (a, b) {
  //   // Nếu giá tiền bằng nhau thì không cần đổi chỗ a và b => return 0
  //   if (a.price == b.price) {
  //     return 0;
  //   } else if (a.price > b.price) {
  //     // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b (trả về một số lớn hơn 0) => return 1
  //     return 1;
  //   } else {
  //     // Nếu giá tiền của a nhỏ hơn b, thì đổi chỗ a và b => return -1 (sắp xếp a đứng trước b)
  //     return -1;
  //   }
  // });

  // //   Sau khi sắp xếp xong, render lại danh sách sản phẩm
  // render(sortedProducts);

  iso.arrange({ sortBy: "price", sortAscending: true });
};

descBtn.onclick = function () {
  // // Sắp xếp thứ tự giá tăng dần
  // const sortedProducts = products.sort(function (a, b) {
  //   // Nếu giá tiền bằng nhau thì không cần đổi chỗ a và b => return 0
  //   if (a.price == b.price) {
  //     return 0;
  //   } else if (a.price > b.price) {
  //     // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b (trả về một số nhỏ hơn 0) => return -1
  //     return -1;
  //   } else {
  //     // Nếu giá tiền của a nhỏ hơn b, thì đổi chỗ a và b => return 1 (sắp xếp a đứng sau b)
  //     return 1;
  //   }
  // });

  // //   Sau khi sắp xếp xong, render lại danh sách sản phẩm
  // render(sortedProducts);

  iso.arrange({ sortBy: "price", sortAscending: false });

};

// Lọc sản phẩm theo thể loại
const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelected = filterSelect.value;
  let filteredProducts = [];
  switch (typeSelected) {
    case "flower":
      filteredProducts = products.filter(function (element) {
        if (element.type == "flower") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "vase":
      filteredProducts = products.filter(function (element) {
        if (element.type == "vase") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "accessories":
      filteredProducts = products.filter(function (element) {
        if (element.type == "accessories") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "smartphone":
      filteredProducts = products.filter(function (element) {
        if (element.type == "smartphone") {
          return true;
        } else {
          return false;
        }
      });
      break;

    default:
      filteredProducts = products;
      break;
  }
  render(filteredProducts);
};
