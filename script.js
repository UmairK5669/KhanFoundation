
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 50) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#1aff00 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const buttons = doc.querySelectorAll(".overlay__content a");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
});


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

window.addEventListener("scroll", function(){
const header = document.getElementsByClassName('header')[0]
header.classList.toggle("sticky", window.scrollY > 50)
})
