gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

window.onload = () => {
  tl.to(
    [
      ".header__logo div div",
      "#toggleTheme div div",
      ".header__desktop_menu a div div",
      ".open_work div div",
      ".presentation__based div div"
    ],
    {
      y: "15%",
      stagger: 0.25
    }
  ).to(
    "#one div div",
    {
      y: "15%",
      stagger: 0.25
    },
    "-=0.75"
  );
};

gsap.to(".about_quote1 div div", {
  scrollTrigger: {
    trigger: ".presentation",
    markers: true,
    start: "75% center"
  },
  y: "15%",
  stagger: 0.25
});

gsap.to(".about_quote2 div div", {
  scrollTrigger: {
    trigger: ".about_quote1",
    markers: true,
    start: "top center"
  },
  y: "15%",
  stagger: 0.25
});

gsap.to(".about_quote3 div div", {
  scrollTrigger: {
    trigger: ".about_quote2",
    markers: true,
    start: "top center"
  },
  y: "15%",
  stagger: 0.25
});
