// Right Slide Animation when visible to the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Typing Animation
function typing() {
  const judul = document.getElementById("welcome");
  const teks = "Welcome To My Website";

  let index = 0;

  function ketikTeks() {
    judul.innerHTML = "";
    judul.innerText = teks.slice(0, index);

    if (index < teks.length) {
      index++;
      setTimeout(ketikTeks, 100); // panggil fungsi ini setiap 100ms
    }
  }
  ketikTeks();
}
setTimeout(typing, 0001);
setInterval(typing, 5000);

// Sidebar is being Displayed when click on menu
const navbarnav = document.querySelector(".navbar-menu");
document.querySelector("#menubar").onclick = function () {
  navbarnav.classList.toggle("active");
};

// Sidebar close when user click on the menu or anywhere except the sidebar
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

  // Convert Form Data to JSON
  const data = JSON.stringify(Object.fromEntries(formData));

  // Send the Form Data using AJAX
  const request = new XMLHttpRequest();
  request.open("POST", "save-data.php"); //mengirimkan data untuk diproses ke save-data.php
  //saya masih belum bisa php jadi form masih belum berfungsi
  request.setRequestHeader("Content-Type", "application/json");
  request.send(data);

  form.reset();
  alert("Form Submitted Succesfully");
});

// Modal Section Start
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// Modal Section End
