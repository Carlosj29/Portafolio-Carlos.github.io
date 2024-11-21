console.log("gg")
const header = document.getElementById("header");

window.onscroll = function() {
  if (window.scrollY >= 10 ) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};