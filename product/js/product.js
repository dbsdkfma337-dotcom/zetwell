const products = {
    wsr213: {
        name: "Zetstation-WSR213",
        summary: "고휘도 (1000~1500nits) LCD가 적용된 제품으로 야외에서 사용하기 적합합니다.",
        image: "../img/5c8877f3-f599-46ba-9ad8-062c459cb814.png",
        imageAlt: "Zetstation-WSR213 제품 이미지",
        desc: [
            "- MOBILE COMMAND TABLE (MCT-43TAE)는 직관 내용, 접근, 정보, 검색, 관제, 산업",
            "- MOBILE COMMAND TABLE (MCT-43TAE)는 국내 방송, 군, 재난, 경찰 재난, 산업 안전 분야 등<br>다양한 환경에서 사용하는 디지털 상황판(Command & Control Table)입니다."
        ],
        spec: [
            ["Processor", "Intel® Core™ Ultra 7/5 Series processors, Q870 Chipset"],
            ["Memory", "2 x DDR5 SODIMM, Max 96GB"],
            ["Display", "Multiple Independent display: Ⅱ x HDMI®, 1 x DP, 1 x eDP / LVDS, 1 x Type C"],
            ["I/O Port", "5 x Intel 2.5 GbE LAN, 4 x USB 3.2 Gen 1, 4 x USB 2.0"],
            ["Expansion", "1 x M.2 M Key, 2 x M.2 B Key, 1 x Nano SIM, 1 x PCIe x16"],
            ["Serial Port", "10 x COM, 8DI / 8DO, Audio"],
            ["Interface", "TPM 2.0, SMBus, I2C, I2S"]
        ]
    },

    wsr210: {
        name: "Zetstation-WSR210",
        summary: "제품 설명 문구를 여기에 넣어주세요.",
        image: "../img/5c8877f3-f599-46ba-9ad8-062c459cb814.png",
        imageAlt: "Zetstation-WSR210 제품 이미지",
        desc: [
            "- WSR210 제품 설명 첫 번째 문장입니다.",
            "- WSR210 제품 설명 두 번째 문장입니다."
        ],
        spec: [
            ["Processor", "WSR210 프로세서 내용"],
            ["Memory", "WSR210 메모리 내용"],
            ["Display", "WSR210 디스플레이 내용"],
            ["I/O Port", "WSR210 I/O 포트 내용"]
        ]
    },

    wsr209: {
        name: "Zetstation-WSR209",
        summary: "제품 설명 문구를 여기에 넣어주세요.",
        image: "../img/5c8877f3-f599-46ba-9ad8-062c459cb814.png",
        imageAlt: "Zetstation-WSR209 제품 이미지",
        desc: [
            "- WSR209 제품 설명 첫 번째 문장입니다.",
            "- WSR209 제품 설명 두 번째 문장입니다."
        ],
        spec: [
            ["Processor", "WSR209 프로세서 내용"],
            ["Memory", "WSR209 메모리 내용"],
            ["Display", "WSR209 디스플레이 내용"],
            ["I/O Port", "WSR209 I/O 포트 내용"]
        ]
    }
};

const productTabs = document.querySelector("#productTabs");
const productName = document.querySelector("#productName");
const productSummary = document.querySelector("#productSummary");
const productImage = document.querySelector("#productImage");
const productDesc = document.querySelector("#productDesc");
const specBody = document.querySelector("#specBody");

function renderTabs(activeKey) {
    productTabs.innerHTML = "";

    for (const key in products) {
        const product = products[key];

        const tab = document.createElement("a");
        tab.href = `?product=${key}`;
        tab.textContent = product.name;

        if (key === activeKey) {
            tab.classList.add("active");
        }

        productTabs.appendChild(tab);
    }
}

function renderProduct(productKey) {
    const product = products[productKey];

    productName.textContent = product.name;
    productSummary.textContent = product.summary;

    productImage.src = product.image;
    productImage.alt = product.imageAlt;

    productDesc.innerHTML = product.desc
        .map((text) => `<p>${text}</p>`)
        .join("");

    specBody.innerHTML = product.spec
        .map((item) => {
            return `
                <tr>
                    <th>${item[0]}</th>
                    <td>${item[1]}</td>
                </tr>
            `;
        })
        .join("");
}

const urlParams = new URLSearchParams(window.location.search);
const currentProduct = urlParams.get("product") || "wsr213";

if (products[currentProduct]) {
    renderTabs(currentProduct);
    renderProduct(currentProduct);
} else {
    renderTabs("wsr213");
    renderProduct("wsr213");
}