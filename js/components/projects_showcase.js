import { projectsShowcase } from "../models/projects_showcase.js";

let projects_showcase = document.querySelector(".projects_showcase__grid");

for (let project of projectsShowcase) {
  projects_showcase.innerHTML += `
    <div class="projects_showcase__grid__card flex flex-ai-fe">
        <h1>${project.id}</h1>
        <a href="${project.url}">${project.title} <span>${project.arrow}</span></a>
    </div>
    `;
}
