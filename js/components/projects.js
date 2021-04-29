import { projects } from "../models/projects.js";

let showcase__grid = document.querySelector(".showcase__grid");

for (let project of projects) {
  showcase__grid.innerHTML += `
              <article class="showcase__grid__article grid" id="article${project.id}">
                  <div
                      class="showcase__grid__article__categories flex flex-ai-c flex-jc-sb"
                  >
                      <h4>${project.category}</h4>
                      <h4>${project.title} ${project.arrow}</h4>
                  </div>
          
                  <h5>
                      ${project.desc}
                  </h5>
              </article>
              `;
}

$("#article1").on("mouseenter", () => {
  cursor.addClass("article1_cursor");
  follower.addClass("article1_cursor");
});
$("#article1").on("mouseleave", () => {
  cursor.removeClass("article1_cursor");
  follower.removeClass("article1_cursor");
});

$("#article2").on("mouseenter", () => {
  cursor.addClass("article2_cursor");
  follower.addClass("article2_cursor");
});
$("#article2").on("mouseleave", () => {
  cursor.removeClass("article2_cursor");
  follower.removeClass("article2_cursor");
});

$("#article3").on("mouseenter", () => {
  cursor.addClass("article3_cursor");
  follower.addClass("article3_cursor");
});
$("#article3").on("mouseleave", () => {
  cursor.removeClass("article3_cursor");
  follower.removeClass("article3_cursor");
});

$("#article4").on("mouseenter", () => {
  cursor.addClass("article4_cursor");
  follower.addClass("article4_cursor");
});
$("#article4").on("mouseleave", () => {
  cursor.removeClass("article4_cursor");
  follower.removeClass("article4_cursor");
});

$("#article5").on("mouseenter", () => {
  cursor.addClass("article5_cursor");
  follower.addClass("article5_cursor");
});
$("#article5").on("mouseleave", () => {
  cursor.removeClass("article5_cursor");
  follower.removeClass("article5_cursor");
});
