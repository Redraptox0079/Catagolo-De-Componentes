// =========================================
// BYTE BAZAAR
// Catálogo tecnológico retro
// Proyecto académico
// =========================================

// Los precios son ilustrativos y están expresados en USD.
// Los enlaces de Newegg permiten buscar productos similares.
// Las imágenes externas pueden cambiar o dejar de funcionar.

const products = [
    {
        id: "WS-001",
        name: "Workstation Creator Pro",
        category: "workstation",
        label: "Estación de trabajo",
        price: 2499.99,
        featured: true,
        search: "workstation desktop computer",
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-502-01.jpg"
    },

    {
        id: "DT-002",
        name: "Desktop Gaming Tower",
        category: "desktop",
        label: "Desktop",
        price: 1399.99,
        featured: true,
        search: "gaming desktop computer tower",
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-491-01.jpg"
    },

    {
        id: "LP-003",
        name: "Laptop Performance 16",
        category: "laptop",
        label: "Laptop",
        price: 1199.99,
        featured: true,
        search: "16 inch performance laptop",
        image: "https://c1.neweggimages.com/productimage/nb640/34-156-634-01.jpg"
    },

    {
        id: "MB-004",
        name: "Smartphone Nova X",
        category: "mobile",
        label: "Celular",
        price: 799.99,
        featured: false,
        search: "unlocked android smartphone",
        image: "https://c1.neweggimages.com/productimage/nb640/75-151-073-01.jpg"
    },

    {
        id: "CP-005",
        name: "Tarjeta gráfica RTX",
        category: "component",
        label: "GPU",
        price: 649.99,
        featured: true,
        search: "NVIDIA GeForce RTX graphics card",
        image: "https://c1.neweggimages.com/productimage/nb640/14-137-784-01.jpg"
    },

    {
        id: "CP-006",
        name: "Procesador de 8 núcleos",
        category: "component",
        label: "CPU",
        price: 329.99,
        featured: false,
        search: "AMD Ryzen 7 processor",
        image: "https://c1.neweggimages.com/productimage/nb640/19-113-777-01.jpg"
    },

    {
        id: "CP-007",
        name: "Memoria RAM 32 GB",
        category: "component",
        label: "Memoria",
        price: 99.99,
        featured: false,
        search: "32GB DDR5 desktop memory kit",
        image: "https://c1.neweggimages.com/productimage/nb640/20-236-781-01.jpg"
    },

    {
        id: "CP-008",
        name: "SSD NVMe 2 TB",
        category: "component",
        label: "Almacenamiento",
        price: 149.99,
        featured: false,
        search: "2TB NVMe SSD",
        image: "https://c1.neweggimages.com/productimage/nb640/20-156-635-01.jpg"
    },

    {
        id: "LP-009",
        name: "Laptop Ultraligera 14",
        category: "laptop",
        label: "Laptop",
        price: 899.99,
        featured: false,
        search: "14 inch ultrabook laptop",
        image: "https://c1.neweggimages.com/productimage/nb640/34-156-634-01.jpg"
    },

    {
        id: "MB-010",
        name: "Smartphone Compact",
        category: "mobile",
        label: "Celular",
        price: 499.99,
        featured: false,
        search: "unlocked compact smartphone",
        image: "https://c1.neweggimages.com/productimage/nb640/75-151-073-01.jpg"
    },

    {
        id: "DT-011",
        name: "Desktop Oficina",
        category: "desktop",
        label: "Desktop",
        price: 599.99,
        featured: false,
        search: "business desktop PC",
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-502-01.jpg"
    },

    {
        id: "CP-012",
        name: "Fuente de poder 850 W",
        category: "component",
        label: "Energía",
        price: 129.99,
        featured: false,
        search: "850W 80 plus gold power supply",
        image: "https://c1.neweggimages.com/productimage/nb640/17-139-287-01.jpg"
    }
];


// =========================================
// NOMBRES DE LAS CATEGORÍAS
// =========================================

const categoryNames = {
    workstation: "Workstation",
    desktop: "Desktop",
    laptop: "Laptop",
    mobile: "Celulares móviles",
    component: "Componentes"
};


// =========================================
// ELEMENTOS HTML
// =========================================

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");


// =========================================
// FORMATO DE PRECIOS
// =========================================

function formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price);
}


// =========================================
// IMAGEN DE RESPALDO
// =========================================

// Si una imagen de Newegg no carga, se crea una ilustración
// SVG localmente mediante JavaScript.

function createFallbackImage(name, category) {
    const safeName = name
        .replace(/[&<>"]/g, "")
        .slice(0, 28);

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="480"
            height="320"
            viewBox="0 0 480 320"
        >
            <rect
                width="480"
                height="320"
                fill="#e7e4d4"
            />

            <g
                fill="none"
                stroke="#20231d"
                stroke-width="5"
            >
                <rect
                    x="150"
                    y="65"
                    width="180"
                    height="125"
                    rx="5"
                />

                <path d="M210 190v28h60v-28" />

                <path d="M180 230h120" />

                <path
                    d="M175 90h130v70H175z"
                    stroke="#8a927c"
                />
            </g>

            <text
                x="240"
                y="128"
                font-family="monospace"
                font-size="18"
                text-anchor="middle"
                fill="#20231d"
            >BYTE / 001</text>

            <text
                x="240"
                y="270"
                font-family="monospace"
                font-size="14"
                text-anchor="middle"
                fill="#20231d"
            >${safeName}</text>

            <text
                x="240"
                y="293"
                font-family="monospace"
                font-size="10"
                text-anchor="middle"
                fill="#727568"
            >${category.toUpperCase()}</text>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


// =========================================
// CREAR TARJETA DE PRODUCTO
// =========================================

function makeProductCard(product) {
    const card = document.createElement("article");

    card.className = "product-card";

    const searchUrl =
        "https://www.newegg.com/p/pl?d=" +
        encodeURIComponent(product.search);

    card.innerHTML = `
        <div class="product-image-wrap">

            <span class="product-tag">
                ${categoryNames[product.category]}
            </span>

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <span class="product-code">
                ${product.id}
            </span>

        </div>

        <div class="product-info">

            <span class="product-category">
                ${categoryNames[product.category]}
            </span>

            <h3>${product.name}</h3>

            <div class="product-bottom">

                <div class="price">
                    ${formatPrice(product.price)}

                    <small>PRECIO ESTIMADO</small>
                </div>

                <a
                    class="product-link"
                    href="${searchUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buscar ${product.name} en Newegg"
                >
                    VER EN NEWEGG
                </a>

            </div>

        </div>
    `;

    // Imagen alternativa si el enlace original falla.
    const img = card.querySelector("img");

    img.addEventListener("error", () => {
        img.src = createFallbackImage(
            product.name,
            product.category
        );
    }, { once: true });

    return card;
}


// =========================================
// FILTRAR PRODUCTOS
// =========================================

function getVisibleProducts() {
    const query = searchInput.value
        .trim()
        .toLowerCase();

    const category = categoryFilter.value;

    let visible = products.filter(product => {

        const searchableText = `
            ${product.name}
            ${product.label}
            ${product.search}
            ${product.id}
            ${categoryNames[product.category]}
        `.toLowerCase();

        const matchesQuery =
            searchableText.includes(query);

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesQuery && matchesCategory;
    });


    // =====================================
    // ORDENAR PRODUCTOS
    // =====================================

    switch (sortFilter.value) {

        case "low":

            visible.sort((a, b) =>
                a.price - b.price
            );

            break;

        case "high":

            visible.sort((a, b) =>
                b.price - a.price
            );

            break;

        case "name":

            visible.sort((a, b) =>
                a.name.localeCompare(b.name, "es")
            );

            break;

        default:

            visible.sort((a, b) =>
                Number(b.featured) -
                Number(a.featured)
            );

            break;
    }

    return visible;
}


// =========================================
// MOSTRAR PRODUCTOS
// =========================================

function renderProducts() {

    const visible = getVisibleProducts();

    // Limpiar tarjetas anteriores.
    productGrid.replaceChildren();

    // Crear las tarjetas nuevas.
    const cards = visible.map(product =>
        makeProductCard(product)
    );

    productGrid.append(...cards);

    // Actualizar contador.
    resultCount.textContent =
        `${String(visible.length).padStart(2, "0")} PRODUCTOS`;

    // Mostrar mensaje cuando no hay resultados.
    emptyState.hidden = visible.length !== 0;

    productGrid.hidden = visible.length === 0;
}


// =========================================
// EVENTOS
// =========================================

// Buscar mientras el usuario escribe.
searchInput.addEventListener(
    "input",
    renderProducts
);

// Filtrar por categoría.
categoryFilter.addEventListener(
    "change",
    renderProducts
);

// Cambiar el orden de los resultados.
sortFilter.addEventListener(
    "change",
    renderProducts
);


// =========================================
// AÑO AUTOMÁTICO EN EL FOOTER
// =========================================

document.querySelector("#year").textContent =
    new Date().getFullYear();


// =========================================
// INICIAR CATÁLOGO
// =========================================

renderProducts();
