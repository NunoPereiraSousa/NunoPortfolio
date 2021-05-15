let header__hamburger = document.querySelector(".header__hamburger");
let header = document.querySelector(".header");
let main = document.querySelector(".main");
let mobile_menu = document.querySelector(".mobile_menu");
let mobile_menu__bg = document.querySelector(".mobile_menu__bg");
let mobile_menu__links = document.querySelector(".mobile_menu__links");
let mobile_menu__services = document.querySelector(".mobile_menu__services");
let mobile_menu__socials = document.querySelector(".mobile_menu__socials");

let header_open = document.querySelector(".header_open");
let header_open__cross = document.querySelector(".header_open__cross");

let header__logo = document.querySelector(".header__logo");

let mobileTl = gsap.timeline();

header__hamburger.addEventListener("click", () => {
  window.scrollTo(0, 0);

  main.classList.add("no_scroll");
  main.classList.add("menu-open");

  mobile_menu.classList.add("open");
  mobile_menu__bg.classList.add("open");
  header__logo.style.color = "#1a1a1a";

  setTimeout(() => {
    header.classList.add("remove");
  }, 150);

  setTimeout(() => {
    header_open.classList.add("open");

    mobile_menu__links.classList.add("open");
    mobile_menu__services.classList.add("open");
    mobile_menu__socials.classList.add("open");

    mobileTl.to(
      [
        ".mobile_menu__links a div div",
        ".mobile_menu__services a div div",
        ".mobile_menu__socials a div div"
      ],
      {
        y: "0%",
        stagger: 0.1
      }
    );
  }, 600);
});

header_open__cross.addEventListener("click", () => {
  setTimeout(() => {
    mobileTl.to(
      [
        ".mobile_menu__links a div div",
        ".mobile_menu__services a div div",
        ".mobile_menu__socials a div div"
      ],
      {
        y: "100%",
        stagger: 0.1
      }
    );
  }, 150);

  setTimeout(() => {
    mobile_menu.classList.remove("open");
    mobile_menu__bg.classList.remove("open");
    main.classList.remove("no_scroll");
    main.classList.remove("menu-open");
    header.classList.remove("remove");
    header_open.classList.remove("open");
    header__logo.style.color = "#fffafa";
  }, 1500);
});
