// CURSOR
let cursor = $(".cursor"),
  follower = $(".cursor-follower"),
  contacts = $(".contacts");

let posX = 0,
  posY = 0;

let mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: () => {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - follower.width() / 2,
        top: posY - follower.height() / 2
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

$(document).on("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

$(".header__desktop_menu").on("mouseenter", () => {
  cursor.addClass("navbar_hover");
  follower.addClass("navbar_hover");
});
$(".header__desktop_menu").on("mouseleave", () => {
  cursor.removeClass("navbar_hover");
  follower.removeClass("navbar_hover");
});

// $(".contacts").on("mouseenter", () => {
//   cursor.addClass("active");
//   follower.addClass("active");
// });
// $(".contacts").on("mouseleave", () => {
//   cursor.removeClass("active");
//   follower.removeClass("active");
// });

$(".open_work").on("mouseenter", () => {
  cursor.addClass("open_work_cursor");
  follower.addClass("open_work_cursor");
});
$(".open_work").on("mouseleave", () => {
  cursor.removeClass("open_work_cursor");
  follower.removeClass("open_work_cursor");
});

// NAVBAR TOGGLE THEME
$("#toggleTheme").on("mouseenter", () => {
  cursor.addClass("toggleTheme");
  follower.addClass("toggleTheme");
  let theme = JSON.parse(localStorage.getItem("theme"));

  if (theme == "lightMode") {
    follower.addClass("nightTheme");
    follower.removeClass("lightTheme");
    follower.removeClass("lightTheme");
    cursor.removeClass("lightTheme");
  } else {
    follower.addClass("lightTheme");
    follower.removeClass("nightTheme");
    follower.removeClass("nightTheme");
    cursor.removeClass("nightTheme");
  }
});

$("#toggleTheme").on("mouseleave", () => {
  cursor.removeClass("toggleTheme");
  follower.removeClass("toggleTheme");
});

$("#toggleTheme").on("click", () => {
  let theme = JSON.parse(localStorage.getItem("theme"));

  if (theme == "lightMode") {
    console.log(1);
    follower.addClass("nightTheme");
    cursor.addClass("nightTheme");
    follower.removeClass("lightTheme");
    cursor.removeClass("lightTheme");
  } else {
    follower.addClass("lightTheme");
    cursor.addClass("lightTheme");
    follower.removeClass("nightTheme");
    cursor.removeClass("nightTheme");
  }
});

$(".contacts").on("mouseenter", () => {
  cursor.addClass("contacts_cursor");
  follower.addClass("contacts_cursor");
});
$(".contacts").on("mouseleave", () => {
  cursor.removeClass("contacts_cursor");
  follower.removeClass("contacts_cursor");
});
