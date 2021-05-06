let toggle = document.querySelector("#toggleTheme");
let cursorFollower = document.querySelector(".cursor-follower");

let body = document.body;

let status = JSON.parse(localStorage.getItem("theme"));

const enableDarkMode = () => {
  body.classList.add("dark");

  localStorage.setItem("theme", JSON.stringify("darkMode"));
};

const disableDarkMode = () => {
  body.classList.remove("dark");

  localStorage.setItem("theme", JSON.stringify(null));
};

const changeText = () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status == "darkMode") {
    toggle.innerHTML = "Light Theme";
  } else {
    toggle.innerHTML = "Dark Theme";
  }
};

const changeCursorTxt = () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status !== "darkMode") {
    cursorFollower.classList.remove("lightTheme");
    cursorFollower.classList.add("nightTheme");
  } else {
    cursorFollower.classList.remove("nightTheme");
    cursorFollower.classList.add("lightTheme");
  }
};

if (status == "darkMode") {
  enableDarkMode();
  toggle.innerHTML = "Light Theme";
}

toggle.addEventListener("click", () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status !== "darkMode") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  changeText();
});
