let carousel = document.querySelectorAll(".carousel");
let section = document.querySelector(".carousels");

let height = 0;

carousel.forEach(c => {
  height += c.offsetHeight;
});

section.style.height = `${height * 0.8}px`;
