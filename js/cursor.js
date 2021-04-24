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
