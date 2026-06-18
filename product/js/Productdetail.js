const productData = {

    "43ig": {

        title: "이동형 멀티터치<br> 테이블 디스플레이",

        desc: "Built for On-the-Move Operations",

        model: "43IG",

        visualImg: "../img/bg11.png",

        productImg: "../img/.png",

        sliderImages: [
            "../img/43IG-h.png",
            "../img/43IG-r.png",
            "../img/43IG.png"
        ],

        hero: {
            title: `극한 환경에서<br>장비를 보호하다`,
            desc: `대형 장비 및 정밀 기기를 위한 전문 보호 케이스입니다.<br> 충격,습기,온도 변화로부터 장비를 안전하게 보호하고<br> 어떤 환경에서도 안정적인 운용을 지원합니다. `,
            icon: "⚒",
            specTitle: "강한 내구성",
            specDesc: "고강도 폴리프로필렌 소재로 충격과진동, 극한 환경에서도<br> 높은 내구성을 자랑합니다.",
            img: "../img/43IG-L.png"
        },

        design: {
            img: "../img/43IG-open.png",
            title: `넓은 내부 공간<br>더 높은 활용성`,
            desc: `넉넉한 내부공간으로 다양한 장비와 액세서리를 효율적으로 수납할 수 있습니다. 맞춤형 품 구성으로 장비를 안전하게 고정하여 운반할 수 있습니다.`,
            specs: [
                { icon: "▣", text: "260L 의 대용량공간" },
                { icon: "↔", text: "4개의 휠로 이동지원" }
            ]
        },

        photos: [
            "../img/43IG1.png",
            "../img/43IG2.png",
            "../img/43IG3.png",
            "../img/43IG4.png"
        ],

        rugged: {
            title: `그 어떤 환경에서도 살아남는,<br>강력한 보호성능`,
            cards: [
                {
                icon: "🔒",
                title: "잠금장치",
                value: "금속 래치 적용",
                desc: "금속 래치와 잠금 지원 구조로 운송 중에도 안정적인 보호 성능을 제공합니다."
                },
                {
                icon: "☔",
                title: "방수·방진",
                value: "IP65",
                desc: "특수 실팅 구조로 외부의 물과 먼지로부터 장비를 안전하게 보호합니다."
                },
                {
                icon: "✇",
                title: "자동 압력 조절 밸브",
                value: "압력 자동 조절",
                desc: "내부 압력을 자동으로 조절하여 기압 변화시에도 안정적인 상태를 유지합니다."
                }
            ]
        },

        video: "../img/43IG-video.mp4",


        specTable: [
            ["디스플레이", '43" 4k UHD (3840 × 2160)'],
            ["밝기", "500 nits"],
            ["시야각", "178° (H) / 178° (V)"],
            ["입력단자", "HDMI, USB, LAN, 전원 입력"],
            ["전원", "AC 100~240V"],
            ["작동온도", "-20°C ~ 60°C"],
            ["보관온도", "-30°C ~ 70°C"],
            ["방진방수", "IP65"],
            ["외부크기", "1178 x 718 x 427 mm"],
            ["내부크기", "1080 x 620 x 400 mm"],
            ["증량", "약 24kg"]
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

document.getElementById("heroDesc").innerHTML =
    product.hero.desc;

document.getElementById("heroIcon").textContent =
    product.hero.icon;

document.getElementById("heroSpecTitle").textContent =
    product.hero.specTitle;

document.getElementById("heroSpecDesc").innerHTML =
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
document.getElementById("designDesc").innerHTML = product.design.desc;

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


document.getElementById("subVisual").style.backgroundImage =
    `url(${product.visualImg})`;

document.getElementById("subVisualDesc").textContent =
    product.desc;

document.getElementById("subVisualTitle").innerHTML =
    product.title;

document.getElementById("subVisualModel").textContent =
    product.model;

document.getElementById("subVisualProductImg").src =
    product.productImg;