import './style.css'

const carousel = document.getElementById("carousel");
const totalSlides = 2; // ✅ fixed to 2 slides
let index = 0;

const dots = document.querySelectorAll("#dots .dot");

function updateSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-black", i === index);
    dot.classList.toggle("bg-transparent", i !== index);
  });
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Attach events
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

// Dot click events
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });
});
