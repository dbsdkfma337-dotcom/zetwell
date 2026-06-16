const header = document.querySelector("#header");
const gnbArea = document.querySelector("#header .gnb-area");
const subBg = document.querySelector("#header .sub-bg");
const quickContact = document.getElementById("quickContact");
const quickBtn = document.getElementById("quickBtn");

gnbArea.addEventListener("mouseenter", () => {
    header.classList.add("open");
});

header.addEventListener("mouseleave", () => {
    header.classList.remove("open");
});

quickBtn.addEventListener("click", function () {
    quickContact.classList.toggle("active");
});