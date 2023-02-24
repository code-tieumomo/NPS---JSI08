const products = [
    {name: "áo dài nữ",
     price:84.84,
     image:"../img/1.png",
     to :"../information/produce1.html",
     type:"clothes"
    },
    {name:"mức dừa",
     price:9.99,
     image:"../img/5 (1).png",
     to:"../information/produce2.html",
     type:"food"
    },
    {
     name:"áo dài nam",
     price:34.34,
     image:"../img/2.png",
     to:"../information/produce3.html",
     type:"clothes"
    },
    {
        name:"bò khô",
        price:3.99,
        image:"../img/4.png",
        to:"../information/produce4.html",
        type:"food"
    }
];

const productsListElement = document.getElementById("container-main")

/**
 * @param {array} productsList 
 *
 */
function render(productsList){
    productsListElement.innerHTML = "";
    productsList.forEach(function (element) {
        productsListElement.insertAdjacentHTML(
            // Vị trí chèn
            "beforeend",
            // Nội dung chèn
            `
            <div class="produce-img">
            <a href="${element.to}">
            <img src="${element.image}" alt=""/>
            <span>${element.name}</span>
            <span>${element.price}$</span>
            </a>
            <button type="button"> + Add to cart</button>
            </div>
            
            `
        );
    });
}
render(products);
localStorage.setItem("products", JSON.stringify(products))
const increaseBtn = document.getElementById("increase") 
const reduceBtn = document.getElementById("reduce")


increaseBtn.onclick = function (){
    const sortedProducts = products.sort (function(a,b){
        if (a.price == b.price){
            return 0;
        } else if (a.price > b.price){
            return 1;
        } else {
            return -1
        }
    });
    render(sortedProducts);
}

reduceBtn.onclick = function (){
    const sortedProducts = products.sort(function(a,b){
        if (a.price == b.pricce){
            return 0;
        } else if (a.price > b.price){
            return -1
        } else {
            return 1
        }
    });
    render(sortedProducts)
}

const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
    const typeSlected = filterSelect.value;
    let filteredProducts = [];
    switch (typeSlected) {
     case "clothes":
            filteredProducts = products.filter(function (element) {
                if (element.type == "clothes") {
                    return true;
                } else {
                    return false;
                }
            });
            break;

        case "food":
            filteredProducts = products.filter(function (element) {
                if (element.type == "food") {
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
