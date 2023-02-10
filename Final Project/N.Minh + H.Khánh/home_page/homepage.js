var counter = 1;
setInterval(function () {
    counter = counter + 1 <= 3 ? counter + 1 : 1;
    document.getElementById("radio" + counter).checked = true;
}, 5000);

// let btn = document.getElementById("btn-produce")

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
// localStorage.setItem("user", JSON.stringify(produce))
]

for (let index = 0; index < produce.length; index++){
    const element = produce[index];
    document.getElementById("main")?.insertAdjacentHTML(
        "beforeend",
        `
        <div class="produce-img" id="produce${index}">
        <a href="../information/produce.html">
          <img src="${element.image}" alt="" />
          <span>${element.name}</span>
          <span>${element.price} $</span>
        </a>
        <button id="btn-produce">Buy Now</button>
        `,
 );

 document.querySelector("#produce" + index + "button")?.addEventListener("click", function (e){
    if (!user) {
        alert("Please login to add to cart");
        return;
    }
    let listCart = JSON.parse(localStorage.getItem("list-cart")) || [];
            listCart.push({
                name: element.name,
                price: element.price,
                image: element.image,
            });
            localStorage.setItem("list-cart", JSON.stringify(listCart));
            alert("Added " + element.name + " to cart");
 })
}
