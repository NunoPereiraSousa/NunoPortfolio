let aboutTl = gsap.timeline();

aboutTl
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
  );

// ABOUT PRESENTATION
if (window.innerWidth > 1300) {
  aboutTl.to(
    ".about__presentation h1 div div",
    {
      y: "15%",
      stagger: 0.25,
      duration: 0.6
    },
    "-=2.5"
  );
} else {
  gsap.to(".about__presentation h1.hide-for-desktop div div", {
    y: "15%",
    stagger: 0.15,
    delay: 0.25,
    duration: 0.6
  });
}
