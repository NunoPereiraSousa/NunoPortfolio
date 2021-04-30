let toggle = document.querySelector("#toggleTheme");

let body = document.body;

let status = "";

window.onload = () => {
  status = JSON.parse(localStorage.getItem("theme"));

  if (status == "dark") {
    body.style.backgroundColor = "#1a1a1a";
  } else {
    body.style.backgroundColor = "#fffafa";
  }

  body.classList = status;
};

toggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");

    status = "light";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");

    status = "dark";
  }
  localStorage.setItem("theme", JSON.stringify(status));

  if (status == "dark") {
    status = "light";
  } else {
    status = "dark";
  }

  if (body.classList.contains("dark")) {
    toggle.innerHTML = "Evening";
  } else {
    toggle.innerHTML = "Morning";
  }
});
