import { projects } from "../models/projects.js";

let showcase__grid = document.querySelector(".showcase__grid");

for (let project of projects) {
  showcase__grid.innerHTML += `
    <article class="showcase__grid__article" id="article1">
        <div
            class="showcase__grid__article__categories flex flex-ai-c flex-jc-sb"
        >
            <h4>${project.category}</h4>
            <h4>${project.title} <span>${project.arrow}</span></h4>
        </div>

        <h5>
            ${project.desc}
        </h5>
    </article>
    `;
}
