let services__grid = document.querySelector(".services__grid");
import { services } from "../models/services.js";

for (let service of services) {
  services__grid.innerHTML += `
        <article class="services__grid__article">
            <h4 class="services__grid__article__header">
                <div class="line">
                    <div>${service.id}</div>
                </div>
            </h4>
            <h3 class="services__grid__article__header2">
                <div class="line">
                    <div>${service.title}</div>
                </div>
            </h3>
        </article>
      `;
}

gsap.registerPlugin(ScrollTrigger);

let servicesTl = gsap.timeline();

servicesTl
  .to(".services__grid__article__header div div", {
    scrollTrigger: {
      trigger: ".services__grid__article",
      markers: true,
      start: "top center"
    },
    y: "0%",
    stagger: 0.25
  })
  .to(".services__grid__article__header2 div div", {
    scrollTrigger: {
      trigger: ".services__grid__article",
      markers: true,
      start: "top center"
    },
    y: "0%",
    stagger: 0.75
  });
