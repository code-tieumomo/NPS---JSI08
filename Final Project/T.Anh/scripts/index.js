/**
 * LOADING OVERLAY
 */
// var loadingOverlay = document.querySelector(".loading");
// function toggleLoading(event) {
//   if (event.keyCode !== 13) return;

//   document.activeElement.blur();

//   if (loadingOverlay.classList.contains("hidden")) {
//     loadingOverlay.classList.remove("hidden");
//   } else {
//     loadingOverlay.classList.add("hidden");
//   }
// }
// document.addEventListener("keydown", toggleLoading);

// // Tắt overlay khi các tài nguyên của trang load xong
// window.addEventListener("load", function () {
//     document.getElementById("overlay").remove();
// });

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