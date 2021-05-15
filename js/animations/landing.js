gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

window.onload = () => {
  tl.to(
    [
      ".header__logo div div",
      "#toggleTheme div div",
      ".header__desktop_menu a div div",
      ".presentation__based div div",
      ".open_work div div"
    ],
    {
      y: "10%",
      stagger: 0.2
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
