let slides = document.querySelectorAll(".slide")

let currSlide = 0;
const nextSlide = document.querySelector(".next-slide");

nextSlide.addEventListener("click", function() {
    currSlide++;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index * 100)}%)`;
    });
});