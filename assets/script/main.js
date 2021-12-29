// sticky navigation
const navSticky = document.getElementById("header");
window.addEventListener("scroll", () => {
  navSticky.classList.toggle("sticky", window.scrollY > 0);
});

// swiper js scroll
const scroll = new Swiper(".myScroll", {
  slidesPerView: "auto",
  spaceBetween: 25,
  centeredSlides: true,
  loop: "auto",
});

// swiper js slider
const slider = new Swiper(".mySlider", {
  spaceBetween: 25,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

/* navigasi menu */
const menuToggle = document.getElementById("menu-toggle");
const navigasi = document.querySelector(".navigasi");
menuToggle.addEventListener("click", () => {
  navigasi.classList.toggle("active");
});
