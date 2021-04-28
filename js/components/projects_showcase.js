import { projectsShowcase } from "../models/projects_showcase.js";

let projects_showcase = document.querySelector(".projects_showcase__grid");
let projects_showcase2 = document.querySelector(".projects_showcase__grid2");

for (let project of projectsShowcase) {
  projects_showcase.innerHTML += `
    <div class="projects_showcase__grid__card flex flex-ai-fe">
        <h1>${project.id}</h1>
        <a href="${project.url}">${project.title} <span>${project.arrow}</span></a>
    </div>
    `;
  projects_showcase2.innerHTML += `
      <div class="projects_showcase__grid__card flex flex-ai-fe">
          <h1>${project.id}</h1>
          <a href="${project.url}">${project.title} <span>${project.arrow}</span></a>
      </div>
      `;
}
