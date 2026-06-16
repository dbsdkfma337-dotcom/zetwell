const productData = {

    "43ig": {

        title: "43IG",

        sliderImages: [
            "../img/43IG.png",
            "../img/43IG-h.png",
            "../img/43IG-r.png"
        ],

        hero: {
            title: `탁월한 성능의<br>견고한 43IG`,
            desc: `43IG는 2.0 GHz 기반 4GB/64GB 메모리와 함께 Android 11을 지원하여 안전하고 빠른 결제 서비스를 제공합니다.`,
            icon: "▦",
            specTitle: "Octa-core 2.0 GHz",
            specDesc: "4GB/64GB 메모리, Android 11",
            img: "../img/43IG-h.png"
        },

        design: {
            img: "../img/43IG.png",
            title: `와이드하고<br>편리한 휴대성`,
            desc: `6.5인치의 와이드한 디스플레이는 결제부터 다양한 서비스 제공을 보다 손쉽게 할 수 있도록 지원합니다.`,
            specs: [
                { icon: "⚖", text: "350 g" },
                { icon: "📐", text: "6.5 in." }
            ]
        },

        photos: [
            "../img/43IG1.png",
            "../img/43IG2.png",
            "../img/43IG3.png",
            "../img/43IG4.png"
        ],

        rugged: {
            title: `그 어떤 비즈니스에서도 살아남는,<br>뛰어난 견고함`,
            cards: [
                {
                icon: "⚡",
                title: "낙하",
                value: "1.5 m",
                desc: "1.5m 높이의 콘크리트 바닥 수회 낙하 테스트를 통과하여 뛰어난 견고함을 자랑합니다."
                },
                {
                icon: "☔",
                title: "방수·방진",
                value: "IP54",
                desc: "먼지, 이물질이 많은 환경에서도 뛰어난 기능을 갖춘 방진 기능과 전방향 물 분사 테스트를 통과하여 강합니다."
                },
                {
                icon: "☀",
                title: "고온·저온",
                value: "-20℃ ~ 60℃",
                desc: "다양한 온도 환경에서도 안정적인 성능을 유지합니다."
                }
            ]
        },

        video: "../img/43IG-video.mp4",


        specTable: [
            ["프로세서", "Intel® Core™ Ultra 7/5 Series processors, Q870 Chipset"],
            ["메모리", "2 x DDR5 SODIMM, Max 96GB"],
            ["디스플레이 출력", "1 x HDMI®, 1 x DP, 1 x eDP / LVDS"],
            ["네트워크", "5 x Intel 2.5 GbE LAN"],
            ["확장 슬롯", "1 x M.2 M Key"],
            ["입출력 포트", "10 x COM, 8DI / 8DO"],
            ["인터페이스", "TPM 2.0"]
        ]
    },


    "43mg": {

        title: "43MG",

        sliderImages: [
            "../img/43MG.png",
            "../img/43MG-h.png"
        ],

        hero: {
            title: `강력한 확장성의<br>43MG`,
            desc: `43MG 제품 설명이 들어갑니다.`,
            icon: "▦",
            specTitle: "43 inches",
            specDesc: "4K Display",
            img: "../img/43MG-h.png"
        },

        design: {
            img: "../img/43IG.png",
            title: `와이드하고<br>편리한 휴대성`,
            desc: `6.5인치의 와이드한 디스플레이는 결제부터 다양한 서비스 제공을 보다 손쉽게 할 수 있도록 지원합니다.`,
            specs: [
                { icon: "⚖", text: "350 g" },
                { icon: "📐", text: "6.5 in." }
            ]
        },

        photos: [
            "../img/43IG1.png",
            "../img/43IG2.png",
            "../img/43IG3.png",
            "../img/43IG4.png"
        ],

        rugged: {
            title: `그 어떤 비즈니스에서도 살아남는,<br>뛰어난 견고함`,
            cards: [
                {
                icon: "⚡",
                title: "낙하",
                value: "1.5 m",
                desc: "1.5m 높이의 콘크리트 바닥 수회 낙하 테스트를 통과하여 뛰어난 견고함을 자랑합니다."
                },
                {
                icon: "☔",
                title: "방수·방진",
                value: "IP54",
                desc: "먼지, 이물질이 많은 환경에서도 뛰어난 기능을 갖춘 방진 기능과 전방향 물 분사 테스트를 통과하여 강합니다."
                },
                {
                icon: "☀",
                title: "고온·저온",
                value: "-20℃ ~ 60℃",
                desc: "다양한 온도 환경에서도 안정적인 성능을 유지합니다."
                }
            ]
        },

        specTable: [
            ["패널 크기 / 등급", "43 inches / Grade A"],
            ["해상도 / 주사율", "4K (3840×2160) / 60Hz"],
            ["시야각", "178°(H) / 178°(V)"]
        ]
    }

};

const params = new URLSearchParams(window.location.search);
const productKey = params.get("product") || "43ig";
const product = productData[productKey];
const videoSection = document.getElementById("videoSection");
const productVideo = document.getElementById("productVideo");
const productVideoSource = document.getElementById("productVideoSource");

if (product.video) {
    videoSection.style.display = "block";
    productVideoSource.src = product.video;
    productVideo.load();
} else {
    videoSection.style.display = "none";
}

if (!product) {
    console.error("해당 제품 데이터가 없습니다:", productKey);
}

document.getElementById("subVisualTitle").textContent =
    product.title;

document.getElementById("productSlider").innerHTML =
    product.sliderImages
        .map((img, index) => `
            <img
                src="${img}"
                alt="${product.title}"
                class="slide-img ${index === 0 ? "active" : ""}"
            >
        `)
        .join("");

document.getElementById("heroTitle").innerHTML =
    product.hero.title;

document.getElementById("heroDesc").textContent =
    product.hero.desc;

document.getElementById("heroIcon").textContent =
    product.hero.icon;

document.getElementById("heroSpecTitle").textContent =
    product.hero.specTitle;

document.getElementById("heroSpecDesc").textContent =
    product.hero.specDesc;

document.getElementById("heroImg").src =
    product.hero.img;

document.getElementById("photoGrid").innerHTML =
    product.photos
        .map((img, index) => `
            <div class="photo-item item-${index + 1}">
                <img src="${img}" alt="">
            </div>
        `)
        .join("");

document.getElementById("specTableBody").innerHTML =
    product.specTable
        .map(row => `
            <tr>
                <th>${row[0]}</th>
                <td>${row[1]}</td>
            </tr>
        `)
        .join("");

document.getElementById("designImg").src = product.design.img;
document.getElementById("designImg").alt = product.title;

document.getElementById("designTitle").innerHTML = product.design.title;
document.getElementById("designDesc").textContent = product.design.desc;

document.getElementById("designSpecList").innerHTML =
    product.design.specs
        .map(item => `
            <div class="spec-item">
                <div class="icon">${item.icon}</div>
                <strong>${item.text}</strong>
            </div>
        `)
        .join("");

document.getElementById("ruggedTitle").innerHTML = product.rugged.title;

document.getElementById("ruggedList").innerHTML =
    product.rugged.cards
        .map(card => `
            <div class="rugged-card">
                <div class="icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <strong>${card.value}</strong>
                <p>${card.desc}</p>
            </div>
        `)
        .join("");