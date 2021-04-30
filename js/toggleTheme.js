let toggle = document.querySelector("#toggleTheme");

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

  status == "darkMode"
    ? (toggle.innerHTML = "Light")
    : (toggle.innerHTML = "Dark");
};

if (status == "darkMode") {
  enableDarkMode();
  toggle.innerHTML = "Light";
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
