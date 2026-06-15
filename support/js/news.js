const newsData = [
    {
        img: "../img/nvis_.png",
        category: "blog",
        title: "NVIS란 무엇인가",
        date: "2026.06.15",
        link: "./nvis.html"
    },
];

const newsList = document.getElementById("newsList");
const pageNumbers = document.getElementById("pageNumbers");
const currentPageBtn = document.getElementById("currentPageBtn");
const totalPageText = document.getElementById("totalPageText");

const perPage = 6;
let currentPage = 1;
const totalPage = Math.ceil(newsData.length / perPage);

function renderNews() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const currentItems = newsData.slice(start, end);

    newsList.innerHTML = currentItems.map(item => `
        <a href="${item.link}" class="news-card">
            <div class="news-card-img">
                <img src="${item.img}" alt="${item.title}">
            </div>

            <div class="news-card-content">
                <span class="news-category">${item.category}</span>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-date">${item.date}</p>
            </div>
        </a>
    `).join("");
}

function renderPagination() {
    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPage; i++) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = i;

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            currentPage = i;
            renderNews();
            renderPagination();
        });

        pageNumbers.appendChild(button);
    }

    currentPageBtn.textContent = currentPage;
    totalPageText.textContent = totalPage;
}

renderNews();
renderPagination();