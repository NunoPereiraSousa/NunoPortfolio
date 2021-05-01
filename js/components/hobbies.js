import { hobbies } from "../models/hobbies.js";

let hobbies__grid = document.querySelector(".hobbies__grid");

for (let hobby of hobbies) {
  hobbies__grid.innerHTML += `
        <article class="hobbies__grid__card grid">
            <p>${hobby.title}</p>
            <p>
                ${hobby.desc}
            </p>
    </article>
    `;
}

let hobbiesCards = document.querySelectorAll(".hobbies__grid__card");

gsap.registerPlugin(ScrollTrigger);

// SCROLL FADE ANIMATION
// hobbiesCards.forEach(hobby => {
//   gsap.to(hobby, {
//     scrollTrigger: {
//       trigger: hobby,
//       markers: true,
//       start: "-120% center"
//     },
//     opacity: 1
//   });
// });
