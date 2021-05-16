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
