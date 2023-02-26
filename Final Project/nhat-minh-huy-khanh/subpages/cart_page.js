const produce = [{
    name : "Áo dài",
    price : 84.84,
    image : "../img/w.png",   
},
{
    name:"Bò Khô",
    price: 5.99,
    image:"../img/bokho.png"
},
{
    name:"mức",
    price: 8.99,
    image:"../img/mucdua.png"
},
]
const cart = JSON.parse(localStorage.getItem("list-cart"));
if (cart) {
    document.querySelector(".cart").innerHTML = "";
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        total += element.price;
        document.querySelector(".cart").insertAdjacentHTML("beforeend", `
            <div class="cart-item">
                <img src="${element.image}">
                <h2>${element.name}</h2>
                <h3>${element.price}</h3>
            </div>
        `);
    }
    document.querySelector(".cart").insertAdjacentHTML("beforeend", `
        <div class="total">
            <h2 style="text-align: right">Total: ${total} $</h2>
            <button>Pay up</button>
        </div>
    `);
    document.querySelector(".total button").addEventListener("click", () => {
        localStorage.removeItem("list-cart");
        alert("Thank you for your purchase");
        window.location.href = "index.html";
    });
}
// function addToCart(){
//     let user = JSON.parse(localStorage.getItem("user"));
//     const cartName = `cart-${user.uid}`;
//     let cart = JSON.parse(localStorage.getItem(cartName)) || [];
  
//     // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
//     const index = cart.findIndex(function (item) {
//       return item.id == id;
//     });
//     if (index < 0) cart.push({ id: id, quantity: 1 });
//     else cart[index].quantity += 1;
  
//     localStorage.setItem(cartName, JSON.stringify(cart));
  
// }