
 console.log(
  `%c ༼ つ ◕_◕ ༽つ %c ✔ index.js %c`,
  "background:#35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff; display: inline-block;",
  `background: green; padding: 1px; border-radius: 0 3px 3px 0; color: #fff; display: inline-block;`,
  "background:transparent"
);


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
});

// Xảy ra khi tất cả các tài nguyên trên trang load xong
window.addEventListener("load", function () {
  // document.getElementById("overlay").remove();
});
