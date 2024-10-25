$(document).ready(function () {
  $(".skitter-large").skitter();
});

if (location.pathname.includes("/index.html")) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
      $(".nav").css({
        "background-color": "#fff",
        boxshadow:
          "0 2px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
      });
      $(".myBanner img").attr("src", "imgs/bakery-color.png");
      $("#hs-navbar-example a").css("color", "#000");
    } else {
      $(".myBanner img").attr("src", "imgs/bakery-light-1.png");
      $("#hs-navbar-example a").css("color", "#fff");
      $(".nav").css({
        "background-color": "transparent",
        boxshadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
      });
    }
  });
}

let secH = $("#sec2").offset().top;

$("#section10").click(function () {
  $("html, body").animate({ scrollTop: secH }, 1000);
});

$(window).scroll(function () {
  let myTop = $(window).scrollTop();
  if (myTop > secH - 100) {
    $(".item").css("display", "flex");
  } else {
    $(".item").css("display", "none");
  }
});

$(".item").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1300);
});

//------------------------- slider

let myimg = document.querySelectorAll(".slider .parent  img");

for (let i = 0; i < myimg.length; i++) {
  myimg[i].addEventListener("click", function () {
    console.log(myimg[i]);
  });
}

//--------------- loading screen

$(document).ready(function () {
  $(".sk-circle").hide(1500, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "visible");
    });
  });
});

$(".side-inner span").eq(0).css("background-color", "#218fe6");
$(".side-inner span").eq(1).css("background-color", "#f44336");
$(".side-inner span").eq(2).css("background-color", "#e91e63");
$(".side-inner span").eq(3).css("background-color", "#9c27b0");
$(".side-inner span").eq(4).css("background-color", "#673ab7");
$(".side-inner span").eq(5).css("background-color", "#3f51b5");
$(".side-inner span").eq(6).css("background-color", "#2196f3");
$(".side-inner span").eq(7).css("background-color", "#03a9f4");
$(".side-inner span").eq(8).css("background-color", "#00bcd4");
$(".side-inner span").eq(9).css("background-color", "#009688");
$(".side-inner span").eq(10).css("background-color", "#4caf50");
$(".side-inner span").eq(11).css("background-color", "#8bc34a");
$(".side-inner span").eq(12).css("background-color", "#cddc39");
$(".side-inner span").eq(13).css("background-color", "#ffc107");
$(".side-inner span").eq(14).css("background-color", "#ff5722");
$(".side-inner span").eq(15).css("background-color", "#795548");
$(".side-inner span").eq(16).css("background-color", "#607d8b");
$(".side-inner span").click(function (e) {
  let spanTarget = $(e.target).css("background-color");
  $(" h1 ,a , p ,li ,h4 ,h5 , border ,h2 ,i, h3 ,button ").css(
    "color",
    spanTarget
  );
});

let sideInnerWidt = $(".side-inner").innerWidth();
console.log(sideInnerWidt);

$(".sideBar").animate({ right: -sideInnerWidt - 10 }, 0);

$(".fa-gears").click(function () {
  let leftValue = $(".sideBar").css("right");
  if (leftValue == "0px") {
    $(".sideBar").animate({ right: -sideInnerWidt - 10 }, 1000);
  } else {
    $(".sideBar").animate({ right: 0 }, 1000);
  }
});
