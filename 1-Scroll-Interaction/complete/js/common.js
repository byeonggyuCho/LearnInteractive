var animation = (frameFunction) => {
  let raId = 0;
  let isPlay = false;
  let value = undefined;

  return {
    isPlay,
    run() {
      isPlay = true;
      console.log("run");
      value = frameFunction({ stop: this.stop, value, raId });
      raId = requestAnimationFrame(this.run());
    },
    stop() {
      console.log("stop", isPlay);
      if (isPlay) {
        cancelAnimationFrame(raId);
      }
    },
  };
};

var a1 = animation(({ stop, value, raId }) => {
  const elem = document.querySelector(".product-name");
  elem.style.transition = `translateY(${value}px)`;

  console.log("function", stop, raId, elem);

  if (value > 1000) {
    console.log("달성", value);
    stop();
  }

  return value + 10;
});

console.log("test");
a1.run();
