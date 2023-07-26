// Get the current year and add it into the HTML
document.querySelector(".year").innerHTML = new Date().getFullYear();

// Navbar
const menBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

menBtn.addEventListener("click", () => {
  // Toggle menu open/close
  menu.classList.toggle("menu-open");
});

// slider
const pag = document.querySelectorAll(".pag");
const cap = document.querySelectorAll(".cap");
const title = document.querySelector(".title");
const slideNum = document.querySelector(".slide-count");
const header = document.querySelector("header");

// Array with image paths for the slider
// const images = [
//     "/images/slide1.jpg",
//     "/images/slide2.jpg",
//     "/images/slide3.jpg"
// ];

const counts = ["01/<sup>03</sup>", "02/<sup>03</sup>", "03/<sup>03</sup>"];

function slider(i) {
  // header.style.background = 'url(${images[i]}) no-repeat center';
  header.style.backgroundImage = "url(./images/slide" + (i + 1) + ".jpg)";

  for (let j = 0; j < pag.length; j++) {
    // remove the active class from all
    pag[j].classList.remove("pag-active");
    cap[j].classList.remove("cap-active");
  }
  // Reset the active class to clicked one
  pag[i].classList.add("pag-active");
  cap[i].classList.add("cap-active");

  // Changing the count and title of the header page
  title.innerHTML = cap[i].lastElementChild.innerHTML;
  slideNum.innerHTML = counts[i];
}

for (let i = 0; i < pag.length; i++) {
  pag[i].addEventListener("click", () => {
    // run the slider function
    slider(i);

    // Set id to clicked pagination index;
    id = i;

    // Stop auto Slide
    stopAutoSlide();
  });
}

let id = 0;

function nextSlide() {
  // Increment img id
  id++;

  if (id > pag.length - 1) {
    id = 0;
  }

  // Run the slider
  slider(id);
}

// Automatic slider
let autoSlide = setInterval(nextSlide, 3000);

// stop Automatic slide
function stopAutoSlide() {
  clearInterval(autoSlide);

  // Restart auto slider
  autoSlide = setInterval(nextSlide, 3000);
}
