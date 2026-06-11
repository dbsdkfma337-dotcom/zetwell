const slides = document.querySelectorAll(".slide-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const progressBar = document.querySelector(".progress span");
const currentNum = document.querySelector("#currentNum");
const totalNum = document.querySelector("#totalNum");

let currentIndex = 0;
const total = slides.length;

totalNum.textContent = String(total).padStart(2, "0");

function updateSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[currentIndex].classList.add("active");

    currentNum.textContent = String(currentIndex + 1).padStart(2, "0");

    progressBar.style.width = `${((currentIndex + 1) / total) * 100}%`;
}

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= total) {
        currentIndex = 0;
    }

    updateSlide();
});

prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = total - 1;
    }

    updateSlide();
});

updateSlide();