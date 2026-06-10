const header = document.querySelector("#header");
const gnbArea = document.querySelector("#header .gnb-area");
const subBg = document.querySelector("#header .sub-bg");

gnbArea.addEventListener("mouseenter", () => {
    header.classList.add("open");
});

header.addEventListener("mouseleave", () => {
    header.classList.remove("open");
});