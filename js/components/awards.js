import { awards } from "../models/awards.js";

let awards__grid = document.querySelector(".awards__grid");

for (let award of awards) {
  awards__grid.innerHTML += `
        <article class="awards__grid__card grid">
            <h3>
                ${award.date1}<br class="hide-for-desktop" />
                ${
                  award.date2 == "Seventeen"
                    ? ""
                    : award.date1 && award.date2 == "Fourteen"
                    ? ""
                    : award.date1
                } <br class="hide-for-desktop" />
                ${award.date2}
            </h3>
            <div>
                <h2>
                    ${award.desc}
                </h2>
                <p>${award.category}</p>
            </div>
        </article>
    `;
}

// let articles = document.querySelectorAll(".showcase__grid__article");

// gsap.registerPlugin(ScrollTrigger);

// // SCROLL FADE ANIMATION
// articles.forEach(article => {
//   gsap.to(article, {
//     scrollTrigger: {
//       trigger: article,
//       start: "-50% center"
//     },
//     opacity: 1
//   });
// });
