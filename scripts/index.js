// const { refresh } = require("aos");
// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });
history.scrollRestoration = "manual";
AOS.init({ duration: 1000 });
window.addEventListener("load", AOS.refresh);

const welcomeBackText = document.getElementById("welcome-back-text");
const loginBtn = document.getElementById("login__btn--container");
const welcomeBackContainer = document.getElementById("welcome-back");
const logoutBtn = document.getElementById("logout-btn");
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (localStorage.getItem("currentUser")) {
  loginBtn.classList.add("hidden");
  welcomeBackContainer.classList.remove("hidden");
  welcomeBackText.innerHTML = `Welcome back, ${currentUser.username}!`;
}

function signOut() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

const mobileNavbarOverlay = document.getElementById("header__navbar--mobile");

function displayMobileNavbar() {
  mobileNavbarOverlay.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function hideMobileNavbar() {
  mobileNavbarOverlay.style.width = "0";
  document.body.style.overflow = "auto";
}
