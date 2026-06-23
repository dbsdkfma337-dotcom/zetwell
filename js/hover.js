const productVisualData = {
    mobile: {
        title: "NVIS",
        bg: "./img/nvis-w22-datial5.png",
        link: "./product/series.html?series=n-series"
    },
    terminal: {
        title: "W-Series",
        bg: "./img/Zetstation-bg.png",
        link: "./product/series.html?series=w-series"
    },
    rfid: {
        title: "E-Series",
        bg: "./img/UK2000-bg.png",
        link: "./product/series.html?series=e-series"
    },
    tablet: {
        title: "M-Series",
        bg: "./img/E-seriesbg.png",
        link: "./product/series.html?series=m-series"
    },
    scanner: {
        title: "43IG",
        bg: "./img/43IG1.png",
        link: "./product/table.html"
    }
};

const visual = document.getElementById("productVisual");
const title = document.getElementById("productTitle");
const menuItems = document.querySelectorAll("#productMenu li");

menuItems.forEach(item => {
    const key = item.dataset.key;

    item.addEventListener("mouseenter", () => {
        const data = productVisualData[key];

        visual.style.backgroundImage = `url(${data.bg})`;
        title.textContent = data.title;

        menuItems.forEach(el => el.classList.remove("active"));
        item.classList.add("active");
    });

    item.addEventListener("click", () => {
        location.href = productVisualData[key].link;
    });
});

const defaultProduct = productVisualData.mobile;

visual.style.backgroundImage = `url(${defaultProduct.bg})`;
title.textContent = defaultProduct.title;