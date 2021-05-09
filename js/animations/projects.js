gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".desktop_section");
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
    scrub: 0.25,
    // snap: 1 / (sections.length - 1),
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
