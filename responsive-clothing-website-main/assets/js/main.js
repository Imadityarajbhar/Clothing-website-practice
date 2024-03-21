/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    1152: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: -64,
    },
  },
});

// Change Background Header
const bgHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

// Scroll reavel animation
const sr = scrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  // reset: true Animation repear
});

sr.scrollReveal(".home__swiper, .home__footer");
sr.scrollReveal(".home__circle", { scale: 1.5, delay: 300 });
sr.scrollReveal(".home__title", { scale: 1, origin: "bottom", delay: 1200 });
sr.scrollReveal(".swiper-button-prev, .swiper-button-next", {
  origin: "bottom",
});
