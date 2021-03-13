let $bar;
let $cloudWrap;
let $cloudWrap2;

window.onload = function () {
  $bar = document.querySelector(".bar");
  $cloudWrap = document.querySelector(".cloudWrap.cloud1"); //구름레이어1
  $cloudWrap2 = document.querySelector(".cloudWrap.cloud2"); //구름 레이어2

  window.addEventListener(
    "scroll",
    function (e) {
      const totalScroll = document.body.scrollHeight - window.outerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const percent = Math.ceil((scrollTop / totalScroll) * 100);

      $bar.style.height = `${percent}%`;
      $cloudWrap.style.transform = `translate(0, ${-scrollTop / 2}px)`;
      $cloudWrap2.style.transform = `translate(0, ${-scrollTop / 1.4}px)`;
    },
    false
  );
};
