const header = document.querySelector("#header");
const gnbArea = document.querySelector("#header .gnb-area");
const menuBtn = document.querySelector("#header .menu-btn");
const gnbLinks = document.querySelectorAll("#header .gnb-link");

const quickContact = document.getElementById("quickContact");
const quickBtn = document.getElementById("quickBtn");

/* PC hover 메뉴 */
gnbArea.addEventListener("mouseenter", () => {
    if (window.innerWidth > 1024) {
        header.classList.add("open");
    }
});

header.addEventListener("mouseleave", () => {
    if (window.innerWidth > 1024) {
        header.classList.remove("open");
    }
});

/* 모바일 메뉴 열기 */
menuBtn.addEventListener("click", () => {
    header.classList.toggle("mobile-open");
});

/* 모바일 depth2 토글 */
gnbLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();

            const item = link.closest(".gnb-item");

            document.querySelectorAll("#header .gnb-item").forEach((el) => {
                if (el !== item) el.classList.remove("active");
            });

            item.classList.toggle("active");
        }
    });
});

/* 화면 커지면 모바일 메뉴 초기화 */
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        header.classList.remove("mobile-open");
        document.querySelectorAll("#header .gnb-item").forEach((item) => {
            item.classList.remove("active");
        });
    }
});

/* 퀵버튼 */
if (quickBtn && quickContact) {
    quickBtn.addEventListener("click", function () {
        quickContact.classList.toggle("active");
    });
}

/* 언어 버튼 */
const lang = document.querySelector(".lang");
const langBtn = document.querySelector(".lang-btn");
const langList = document.querySelector(".lang-list");

langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langList.classList.toggle("active");
});

document.addEventListener("click", () => {
    langList.classList.remove("active");
});