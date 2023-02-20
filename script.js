const button = document.getElementById("runaway-btn");
const buttonYes = document.querySelector('.shake')

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
    delay: function(el, i) { return i * 1; },
  });

["mouseover", "click", "touchstart", "touchend", "touchcancel", "touchmove"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

buttonYes.addEventListener('click', () => {
  document.querySelector('img').style.display = 'block'
})