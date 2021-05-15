let services__grid = document.querySelector(".services__grid");
import { services } from "../models/services.js";

for (let service of services) {
  services__grid.innerHTML += `
        <article class="services__grid__article">
            <h4 class="services__grid__article__header">
                ${service.id}
            </h4>
            <h3 class="services__grid__article__header2">
                ${service.title}
            </h3>
        </article>
      `;
}
