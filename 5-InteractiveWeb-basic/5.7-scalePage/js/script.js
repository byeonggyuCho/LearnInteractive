let scrollTop = 0;
let imageAll;
let totalNum = 0;

function scrollFunc(e) {
  scrollTop = this.scrollY;

  imageAll.forEach((imgNode, index) => {
    // 원근감 멀리 있는 이미지는 원근감이 커야한다.
    const retio = scrollTop / (5 * (totalNum - index));

    imgNode.style.transform = `perspective(400px) translateZ(${retio}px)`;
  });
}
window.onload = function () {
  imageAll = document.querySelectorAll(".parallax_image");
  totalNum = imageAll.length;

  window.addEventListener("scroll", scrollFunc);
};
