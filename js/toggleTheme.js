let toggle = document.querySelector("#toggleTheme div div");
let cursorFollower = document.querySelector(".cursor-follower");
let cur = document.querySelector(".cursor");

let body = document.body;

let status = JSON.parse(localStorage.getItem("theme"));

const enableLightMode = () => {
  body.classList.add("light");

  localStorage.setItem("theme", JSON.stringify("lightMode"));
};

const disableLightMode = () => {
  body.classList.remove("light");

  localStorage.setItem("theme", JSON.stringify(null));
};

const changeText = () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status == "lightMode") {
    toggle.innerHTML = "Dark Theme";
  } else {
    toggle.innerHTML = "Light Theme";
  }
};

const changeCursor = () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status == "lightMode") {
    cursorFollower.classList.remove("lightTheme");
    cursorFollower.classList.add("nightTheme");
    cur.classList.remove("lightTheme");
    cur.classList.add("nightTheme");
  } else {
    cursorFollower.classList.remove("nightTheme");
    cursorFollower.classList.add("lightTheme");
    cur.classList.remove("nightTheme");
    cur.classList.add("lightTheme");
  }
};

toggle.addEventListener("click", () => {
  status = JSON.parse(localStorage.getItem("theme"));

  console.log(status);

  if (status !== "lightMode") {
    enableLightMode();
  } else {
    disableLightMode();
  }

  changeText();
});

if (status == "lightMode") {
  enableLightMode();
  changeCursor();
  toggle.innerHTML = "Dark Theme";
}
