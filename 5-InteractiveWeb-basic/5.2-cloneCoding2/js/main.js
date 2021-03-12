console.log("[init]");

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.01;
let $imgesArr = null;
let $brid = null;

window.onload = function () {
  $imgesArr = document.querySelectorAll("img");
  $brid = document.querySelector(".brid");
  console.log("count", $imgesArr.length);

  window.addEventListener("mousemove", function mouseFn({ clientX, clientY }) {
    x = clientX - window.innerWidth / 2;
    y = clientY - window.innerHeight / 2;
  });

  loop();
};

function loop() {
  mx += x - mx + speed;
  my += y - my + speed;

  $imgesArr[0].style.transform = `translate(${-mx / 9}px,${-my / 9}px)`;
  $imgesArr[1].style.transform = `translate(${-mx / 5}px,${-my / 4}px)`;
  $imgesArr[2].style.transform = `translate(${-mx / 4}px,${-my / 3}px)`;
  $imgesArr[3].style.transform = `translate(${-mx / 1}px,${-my / 1}px)`;

  $brid.style.transform = `translate(${-mx / 6}px,${-my / 6}px)`;
  window.requestAnimationFrame(loop);
}
