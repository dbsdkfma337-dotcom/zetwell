const productVisualData = {
    mobile: {
        title: "NVIS",
        bg: "./img/nvis-w22-datial5.png",
        koLink: "./product/series.html?series=n-series",
        engLink: "./product/series-eng.html?series=n-series-eng"
    },
    terminal: {
        title: "W-Series",
        bg: "./img/wsr213-bg.png",
        koLink: "./product/series.html?series=w-series",
        engLink: "./product/series-eng.html?series=w-series-eng"
    },
    rfid: {
        title: "E-Series",
        bg: "./img/UK2000-bg.png",
        koLink: "./product/series.html?series=e-series",
        engLink: "./product/series-eng.html?series=e-series-eng"
    },
    tablet: {
        title: "M-Series",
        bg: "./img/E-seriesbg.png",
        koLink: "./product/series.html?series=m-series",
        engLink: "./product/series-eng.html?series=m-series-eng"
    },
    scanner: {
        title: "43IG",
        bg: "./img/43IG1.png",
        koLink: "./product/Productdetail.html?product=43ig",
        engLink: "./product/Productdetail-eng.html?product=43igeng"
    }
};

const visual = document.getElementById("productVisual");
const title = document.getElementById("productTitle");
const menuItems = document.querySelectorAll("#productMenu li");

const isEng = location.pathname.includes("eng");

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
        location.href = isEng
            ? productVisualData[key].engLink
            : productVisualData[key].koLink;
    });
});

const defaultProduct = productVisualData.mobile;
visual.style.backgroundImage = `url(${defaultProduct.bg})`;
title.textContent = defaultProduct.title;