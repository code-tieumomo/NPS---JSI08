var counter = 1;
setInterval(function () {
    counter = counter + 1 <= 3 ? counter + 1 : 1;
    document.getElementById("radio" + counter).checked = true;
}, 5000);

window.addEventListener("load", function () {
    // document.getElementById("overlay").remove();
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", function () {
        document.body.removeChild("loader");
    })
  });

document.addEventListener("DOMContentLoaded", function(){

    if(localStorage.getItem("user") == null){
} 
    else{
    // nếu đã đăng nhập
    document.querySelector("#account-icon").remove();
    document.querySelector("#user-img-").src = user.photoURL;
}
});

// let btn = document.getElementById("btn-produce")

// const listCart = [
//     {
//       name: "Áo dài nữ",
//       price: 84.84,
//       image: "../img/1.png",
//       to: "../information/produce1.html",
//       type: "clothes",
//     },
//     {
//       name: "Mứt dừa",
//       price: 9.99,
//       image: "../img/5 (1).png",
//       to: "../information/produce2.html",
//       type: "food",
//     },
//     {
//       name: "Áo dài nam",
//       price: 34.34,
//       image: "../img/2.png",
//       to: "../information/produce3.html",
//       type: "clothes",
//     },
//     {
//       name: "Bò khô",
//       price: 3.99,
//       image: "../img/4.png",
//       to: "../information/produce5.html",
//       type: "food",
//     },
//     {
//       name: "Áo dài trẻ em",
//       price: 29.99,
//       image: "../img/6.png",
//       to: "../information/produce4.html",
//       type: "clothes",
//     },
//     {
//       name: "Câu Đối",
//       price: 0.99,
//       image: "../img/3.png",
//       to: "../information/produce4.html",
//       type: "thing",
//     },
//   ];
  
// // // localStorage.setItem("user", JSON.stringify(produce))
// // ]

// // for (let index = 0; index < produce.length; index++){
// //     const element = produce[index];
// //     document.getElementById("main")?.insertAdjacentHTML(
// //         "beforeend",
// //         `
// //     <div class="produce-img" id="produce${index}">
// //         <a href="../information/produce.html">
// //           <img src="${element.image}" alt="" />
// //           <span>${element.name}</span>
// //           <span>${element.price} $</span>
// //         </a>
// //         <button id="btn-produce">Buy Now</button>
// //     </div>
            
// //         `,
// //  );
// // // const btn = doucument.getElementById("btn-produce")
//  btn.onclick = function (){
//     window.location.href("../information/produce1.html")
// }
//   document.querySelector("#produce" + index + "button")?.addEventListener("click", function (e){
//    if (!user) {
//        alert("Please login to add to cart");
//         return;
//      }
//     let listCart = JSON.parse(localStorage.getItem("list-cart")) || [];
//             listCart.push({
//                 name: element.name,
//                 price: element.price,
//                 image: element.image,
//             });
//             localStorage.setItem("list-cart", JSON.stringify(listCart));
//             alert("Added " + element.name + " to cart");
//  })

