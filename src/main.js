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



// All Microsoft menu toggle
const togglelink = document.getElementById('all-microsoft');
const megaMenu = document.getElementById('mega-menu');


togglelink.addEventListener('click', (e) => {
  e.stopPropagation();  
  if (window.innerWidth >= 1024) {
    megaMenu.classList.toggle('hidden');
  }
});

// close the menu when clicking outside
document.addEventListener('click', (e) => {
  if (!togglelink.contains(e.target) && !megaMenu.contains(e.target)) {
    megaMenu.classList.add('hidden');
  }
});

//  hide menu automatically if resized below lg
window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    megaMenu.classList.add('hidden');
  }
});