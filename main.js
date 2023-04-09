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

// Form Function
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // XML Request
  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open("POST", "data.txt");
  request.send(FormData);

  form.reset();
  alert("Form Submitted Succesfully");
});
