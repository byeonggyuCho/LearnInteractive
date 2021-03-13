let $h1;
let $coverImg;
let $cover;

window.onload = function () {
  $h1 = document.getElementsByTagName("h1")[0];
  $coverImg = document.getElementsByClassName("coverImg")[0];
  $cover = document.getElementsByClassName("cover")[0];
  $cover.style.opacity = 0.3;

  window.addEventListener("scroll", function (e) {
    const scrollTop = document.documentElement.scrollTop;

    $h1.style.transform = "translate(0," + -scrollTop / 10 + "px)";
    $coverImg.style.transform = "scale(" + (1 + scrollTop / 1000) + ")";
    $cover.style.opacity = 0.3 + scrollTop / 1000;
  });
};
