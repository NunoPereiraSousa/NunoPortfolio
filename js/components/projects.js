import { projects } from "../models/projects.js";

let wrapper_desktop = document.querySelector(".wrapper_desktop");
let wrapper = document.querySelector(".wrapper");

for (let project of projects) {
  wrapper.innerHTML += `
      <section class="mobile_section flex flex-fd-c flex-ai-c flex-jc-c">
        <h1>
        <div class="line"><div>${project.id}</div></div></h1>
        <h3><div class="line"><div>${project.title}</div></div></h3>
        <h5><div class="line"><div>${project.category}</div></div></h5>
        <svg viewBox="0 0 72 100">
          <path
            style="fill: #e8e8e8"
            d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9
            v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1
            v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"
          ></path>
        </svg>
      </section>
              `;

  wrapper_desktop.innerHTML += `
      <section class="desktop_section flex flex-fd-c flex-ai-c">
        <div>
          <h1>
          <div class="line"><div>${project.id}</div></div></h1>
          <h3><div class="line"><div>${project.title}</div></div></h3>
          <h5><div class="line"><div>${project.category}</div></div></h5>
          <svg viewBox="0 0 72 100">
            <path
              style="fill: #e8e8e8"
              d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9
              v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1
              v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"
            ></path>
          </svg>
        </div>
      </section>
              `;
}

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".desktop_section");

let projectTl = gsap.timeline();
let projectTl2 = gsap.timeline();

window.onload = () => {
  if (window.innerWidth > 1300) {
    projectTl
      .to(".header__logo div div", {
        y: "0%",
        stagger: 0.25
      })
      .to(
        "#toggleTheme div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=0.3"
      )
      .to(
        ".header__desktop_menu a div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=0.3"
      )
      .to(
        ".desktop_section h1 div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=1"
      )
      .to(
        ".desktop_section h3 div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=2.25"
      )
      .to(
        ".desktop_section h5 div div",
        {
          y: "0%",
          delay: 0.5,
          stagger: 0.25
        },
        "-=2.5"
      )
      .to(
        ".desktop_section svg",
        {
          y: "0%",
          stagger: 0.25,
          opacity: 1
        },
        "-=3.5"
      );
  } else {
    projectTl2
      .to(".header__logo div div", {
        y: "0%",
        stagger: 0.25
      })
      .to(
        "#toggleTheme div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=0.3"
      )
      .to(
        ".header__desktop_menu a div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=0.3"
      )
      .to(
        ".mobile_section h1 div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=1"
      )
      .to(
        ".mobile_section h3 div div",
        {
          y: "0%",
          stagger: 0.25
        },
        "-=2.25"
      )
      .to(
        ".mobile_section h5 div div",
        {
          y: "0%",
          delay: 0.5,
          stagger: 0.25
        },
        "-=2.5"
      )
      .to(
        ".mobile_section svg",
        {
          y: "0%",
          stagger: 0.25,
          opacity: 1
        },
        "-=1.5"
      );
  }
};

let maxWidth = 0;

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach(section => {
    maxWidth += section.offsetWidth;
  });
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(sections, {
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper_desktop",
    pin: true,
    scrub: true,
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true
  }
});

sections.forEach((sct, i) => {
  ScrollTrigger.create({
    trigger: sct,
    start: () =>
      "top top-=" +
      (sct.offsetLeft - window.innerWidth / 2) *
        (maxWidth / (maxWidth - window.innerWidth)),
    end: () =>
      "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth))
    // toggleClass: { targets: sct, className: "active" }
  });
});

const sectionsMobile = gsap.utils.toArray(".mobile_section");

sectionsMobile.forEach((sct, i) => {
  ScrollTrigger.create({
    trigger: sct,
    start: "top center"
    // toggleClass: { targets: sct, className: "active" }
  });
});
