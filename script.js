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
    const icons = {
        workstation: `
            <rect x="105" y="65" width="170" height="115" rx="5"/>
            <rect x="118" y="78" width="144" height="88"/>
            <path d="M175 180v25h30v-25 M155 210h70"/>
            <path d="M130 100h120 M130 115h80 M130 130h100"/>
        `,
        desktop: `
            <rect x="145" y="45" width="100" height="160" rx="5"/>
            <rect x="155" y="55" width="80" height="140"/>
            <circle cx="195" cy="85" r="17"/>
            <circle cx="195" cy="135" r="17"/>
            <path d="M195 65v40 M175 85h40 M195 115v40 M175 135h40"/>
            <circle cx="225" cy="175" r="4"/>
        `,
        laptop: `
            <path d="M110 75 Q110 65 122 65 H258 Q270 65 270 75 V165 H110 Z"/>
            <rect x="120" y="75" width="140" height="80"/>
            <path d="M110 165 L85 195 Q82 202 95 202 H285 Q298 202 295 195 L270 165 Z"/>
            <path d="M155 180h70"/>
        `,
        mobile: `
            <rect x="145" y="35" width="90" height="175" rx="12"/>
            <rect x="153" y="52" width="74" height="137" rx="3"/>
            <circle cx="190" cy="198" r="4"/>
            <path d="M177 44h26"/>
        `,
        component: `
            <rect x="100" y="65" width="180" height="120" rx="4"/>
            <rect x="135" y="90" width="110" height="70"/>
            <rect x="150" y="105" width="80" height="40"/>
            <path d="M100 80h-20v20h20 M280 80h20v20h-20"/>
            <path d="M120 185v18 M145 185v18 M170 185v18 M195 185v18 M220 185v18 M245 185v18 M270 185v18"/>
        `
    };

    const drawings = icons[category] || icons.component;

    const safeName = String(name)
        .replace(/[&<>"']/g, "")
        .slice(0, 32);

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="380" height="250"
             viewBox="0 0 380 250">

            <defs>
                <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#e8e6d9"/>
                    <stop offset="100%" stop-color="#c9c9b9"/>
                </linearGradient>
            </defs>

            <rect width="380" height="250" fill="url(#background)"/>

            <g stroke="#33ff33" stroke-width="1" opacity="0.35">
                ${Array.from({length: 13}, (_, i) =>
                    `<path d="M0 ${i * 20} H380"/>`
                ).join("")}
            </g>

            <g fill="none"
               stroke="#202820"
               stroke-width="4"
               stroke-linejoin="round"
               stroke-linecap="round">
                ${drawings}
            </g>

            <g fill="#202820" font-family="monospace" text-anchor="middle">
                <text x="190" y="226" font-size="12">${safeName}</text>
                <text x="190" y="241" font-size="8">${category.toUpperCase()} // BYTE BAZAAR</text>
            </g>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
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
