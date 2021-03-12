console.log("init");

let $human = null;
let $bgimg = null;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;

window.onload = function () {
  $human = document.querySelector(".human");
  $bgimg = document.querySelector(".backImg");

  window.addEventListener("mousemove", function mouseFn({ clientX, clientY }) {
    x = clientX - window.innerWidth / 2;
    y = clientY - window.innerHeight / 2;
  });

  loop();
};

function loop() {
  mx += x - mx + speed;
  my += y - my + speed;

  $human.style.transform = `translate(${-mx / 6}px,${-my / 6}px)`;
  $bgimg.style.transform = `translate(${mx / 6}px,${my / 6}px)`;
  window.requestAnimationFrame(loop);
}
