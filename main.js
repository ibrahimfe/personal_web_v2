const navbarnav = document.querySelector(".navbar-menu");
document.querySelector("#menubar").onclick = function () {
  navbarnav.classList.toggle("active");
};

const menubar = document.querySelector("#menubar");
document.addEventListener("click", function (e) {
  if (!menubar.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
