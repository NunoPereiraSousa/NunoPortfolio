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

$(".contacts").on("mouseenter", () => {
  cursor.addClass("active");
  follower.addClass("active");
});
$(".contacts").on("mouseleave", () => {
  cursor.removeClass("active");
  follower.removeClass("active");
});

$(".open_work").on("mouseenter", () => {
  cursor.addClass("open_work_cursor");
  follower.addClass("open_work_cursor");
});
$(".open_work").on("mouseleave", () => {
  cursor.removeClass("open_work_cursor");
  follower.removeClass("open_work_cursor");
});

$("#article1").on("mouseenter", () => {
  cursor.addClass("article1_cursor");
  follower.addClass("article1_cursor");
});
$("#article1").on("mouseleave", () => {
  cursor.removeClass("article1_cursor");
  follower.removeClass("article1_cursor");
});

$("#article2").on("mouseenter", () => {
  cursor.addClass("article2_cursor");
  follower.addClass("article2_cursor");
});
$("#article2").on("mouseleave", () => {
  cursor.removeClass("article2_cursor");
  follower.removeClass("article2_cursor");
});

$("#article3").on("mouseenter", () => {
  cursor.addClass("article3_cursor");
  follower.addClass("article3_cursor");
});
$("#article3").on("mouseleave", () => {
  cursor.removeClass("article3_cursor");
  follower.removeClass("article3_cursor");
});

$("#article4").on("mouseenter", () => {
  cursor.addClass("article4_cursor");
  follower.addClass("article4_cursor");
});
$("#article4").on("mouseleave", () => {
  cursor.removeClass("article4_cursor");
  follower.removeClass("article4_cursor");
});

$("#article5").on("mouseenter", () => {
  cursor.addClass("article5_cursor");
  follower.addClass("article5_cursor");
});
$("#article5").on("mouseleave", () => {
  cursor.removeClass("article5_cursor");
  follower.removeClass("article5_cursor");
});
