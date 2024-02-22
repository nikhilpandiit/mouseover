window.addEventListener("mouseover", function (detail) {
  var rect = document.querySelector("#rect");

  var xval = gsap.utils.mapRange(
    0,
    this.window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    this.window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    detail.clientX
  );

  gsap.to("#rect", {
    left: xval,
    ease: Power3,
  });
});
