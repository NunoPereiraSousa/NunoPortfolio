import { awards } from "../models/awards.js";

let showcase__grid = document.querySelector(".showcase__grid");

for (let award of awards) {
  showcase__grid.innerHTML += `
    <article class="showcase__grid__article">
        <div
            class="showcase__grid__article__categories flex flex-ai-c flex-jc-sb"
        >
            <h4>${award.title}</h4>
            <h4>${award.date}</h4>
        </div>

        <h5>
            ${award.desc}
        </h5>
    </article>
    `;
}