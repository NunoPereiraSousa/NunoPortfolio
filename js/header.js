let header__hamburger = document.querySelector(".header__hamburger");
let main = document.querySelector(".main");
let mobile_menu = document.querySelector(".mobile_menu");
let mobile_menu__bg = document.querySelector(".mobile_menu__bg");
let mobile_menu__links = document.querySelector(".mobile_menu__links");
let mobile_menu__services = document.querySelector(".mobile_menu__services");
let mobile_menu__socials = document.querySelector(".mobile_menu__socials");

header__hamburger.addEventListener("click", () => {
  if (
    !mobile_menu__links.classList.contains("open") &&
    !mobile_menu__socials.classList.contains("open")
  ) {
    main.classList.add("no_scroll");
    main.classList.add("menu-open");

    mobile_menu.classList.add("open");
    mobile_menu__bg.classList.add("open");

    setTimeout(() => {
      mobile_menu__links.classList.add("open");
      mobile_menu__services.classList.add("open");
      mobile_menu__socials.classList.add("open");
    }, 600);
  } else {
    mobile_menu__links.classList.remove("open");
    mobile_menu__services.classList.remove("open");
    mobile_menu__socials.classList.remove("open");

    setTimeout(() => {
      main.classList.remove("no_scroll");
      main.classList.remove("menu-open");
    }, 800);

    setTimeout(() => {
      mobile_menu.classList.remove("open");
      mobile_menu__bg.classList.remove("open");
    }, 600);
  }
});
