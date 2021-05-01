let toggle = document.querySelector("#toggleTheme");
let cursorFollower = document.querySelector(".cursor-follower");
console.log(cursorFollower);

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

const changeCursorTxt = () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status !== "darkMode") {
    cursorFollower.classList.remove("lightTheme");
    cursorFollower.classList.add("nightTheme");

    console.log(cursorFollower.classList);
  } else {
    cursorFollower.classList.remove("nightTheme");
    cursorFollower.classList.add("lightTheme");

    console.log(cursorFollower.classList);
  }
};

if (status == "darkMode") {
  enableDarkMode();
  toggle.innerHTML = "Light Theme";
}

toggle.addEventListener("click", () => {
  status = JSON.parse(localStorage.getItem("theme"));

  console.log(status);

  if (status !== "darkMode") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  changeText();
});
