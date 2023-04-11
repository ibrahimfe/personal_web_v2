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

// Gallery Start
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Gallery End
