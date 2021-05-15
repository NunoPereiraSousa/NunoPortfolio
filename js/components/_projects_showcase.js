import { projectsShowcase } from "../models/projects.js";

let projectsShowcaseGrid = document.querySelector(".showcase__grid");

console.log(projectsShowcaseGrid);

for (let project of projectsShowcase) {
  projectsShowcaseGrid.innerHTML += `
        <article class="showcase__grid__article flex flex-ai-fe">
            <h4>
                0${project.id}
            </h4>

            <h5>
                ${project.title}
            </h5>
        </article>
    `;
}
