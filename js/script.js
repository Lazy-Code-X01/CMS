// ==== NAV MENU ==== //
const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// when i click on the li the nav will close
const navLink = document.querySelectorAll(".nav_menu_item");
function linkAction() {
  navId.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));



// ==== ONCLICK PLAY ADIO AND PAUSE ==== //
const audio = document.getElementById("audio");
audio.volume = 0.5;

// audio.play();
// ==== PLAY MUSIC ==== //
const playBtn = document.getElementById("play-btn"),
  pauseBtn = document.getElementById("pause-btn");
playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});
// ==== PAUSE MUSIC ==== //
pauseBtn.addEventListener("click", () => {
  audio.pause();
  pauseBtn.classList.remove("hide");
  playBtn.classList.add("hide");
});

// ==== SCROLL TO TOP BUTTON ==== //
const scrollBtn = document.querySelector(".btn-style");
const btnVisibility = () => {
  if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
  } else {
      scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});
// end








// ==== Animate on Scroll Initialize  ==== //
AOS.init();


// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
