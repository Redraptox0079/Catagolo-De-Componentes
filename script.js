// =========================================
// BYTE BAZAAR
// Catálogo tecnológico retro
// Proyecto académico
// =========================================

// Los precios son estimados y están expresados en USD.
// Las especificaciones deben verificarse antes de comprar.
// Las búsquedas de Newegg permiten encontrar productos similares.

const products = [
    {
        id: "WS-001",
        name: "Workstation Creator Pro",
        category: "workstation",
        label: "Estación de trabajo",
        brand: "Varias marcas",
        price: 2499.99,
        featured: true,
        search: "workstation desktop computer",
        description: "Computadora de alto rendimiento para creación de contenido, diseño y trabajo profesional.",
        specifications: {
            "Categoría": "Estación de trabajo",
            "Uso": "Diseño y productividad",
            "Precio": "Estimado en USD"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-502-01.jpg",
        productUrl: ""
    },

    {
        id: "DT-002",
        name: "Desktop Gaming Tower",
        category: "desktop",
        label: "Desktop",
        brand: "Varias marcas",
        price: 1399.99,
        featured: true,
        search: "gaming desktop computer tower",
        description: "Computadora de escritorio orientada a videojuegos y aplicaciones exigentes.",
        specifications: {
            "Categoría": "PC de escritorio",
            "Uso": "Gaming",
            "Formato": "Torre"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-491-01.jpg",
        productUrl: ""
    },

    {
        id: "LP-003",
        name: "Laptop Performance 16",
        category: "laptop",
        label: "Laptop",
        brand: "Varias marcas",
        price: 1199.99,
        featured: true,
        search: "16 inch performance laptop",
        description: "Laptop de alto rendimiento para productividad, entretenimiento y multitarea.",
        specifications: {
            "Categoría": "Laptop",
            "Tamaño anunciado": "16 pulgadas",
            "Uso": "Productividad y entretenimiento"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/34-156-634-01.jpg",
        productUrl: ""
    },

    {
        id: "MB-004",
        name: "Smartphone Nova X",
        category: "mobile",
        label: "Celular",
        brand: "Varias marcas",
        price: 799.99,
        featured: false,
        search: "unlocked android smartphone",
        description: "Teléfono inteligente para comunicación, aplicaciones, fotografía y entretenimiento.",
        specifications: {
            "Categoría": "Smartphone",
            "Sistema": "Android, según modelo",
            "Conectividad": "Móvil e inalámbrica"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/75-151-073-01.jpg",
        productUrl: ""
    },

    {
        id: "CP-005",
        name: "Tarjeta gráfica RTX",
        category: "component",
        label: "GPU",
        brand: "NVIDIA y fabricantes asociados",
        price: 649.99,
        featured: true,
        search: "NVIDIA GeForce RTX graphics card",
        description: "Tarjeta gráfica dedicada para videojuegos, creación de contenido y procesamiento visual.",
        specifications: {
            "Categoría": "Tarjeta gráfica",
            "Familia": "NVIDIA GeForce RTX",
            "Interfaz habitual": "PCI Express"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/14-137-784-01.jpg",
        productUrl: ""
    },

    {
        id: "CP-006",
        name: "Procesador de 8 núcleos",
        category: "component",
        label: "CPU",
        brand: "AMD",
        price: 329.99,
        featured: false,
        search: "AMD Ryzen 7 processor",
        description: "Procesador de la familia Ryzen 7 para equipos de escritorio y tareas exigentes. Comprueba el modelo exacto antes de comprar.",
        specifications: {
            "Fabricante buscado": "AMD",
            "Familia buscada": "Ryzen 7",
            "Uso": "Gaming y productividad",
            "Importante": "Verificar modelo y número de núcleos"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/19-113-777-01.jpg",
        productUrl: ""
    },

    {
        id: "CP-007",
        name: "Memoria RAM 32 GB",
        category: "component",
        label: "Memoria",
        brand: "Varias marcas",
        price: 99.99,
        featured: false,
        search: "32GB DDR5 desktop memory kit",
        description: "Memoria para mejorar la capacidad de multitarea de una computadora compatible.",
        specifications: {
            "Capacidad anunciada": "32 GB",
            "Tipo buscado": "DDR5",
            "Formato buscado": "Memoria de escritorio",
            "Importante": "Verificar compatibilidad con la placa base"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/20-236-781-01.jpg",
        productUrl: ""
    },

    {
        id: "CP-008",
        name: "SSD NVMe 2 TB",
        category: "component",
        label: "Almacenamiento",
        brand: "Varias marcas",
        price: 149.99,
        featured: false,
        search: "2TB NVMe SSD",
        description: "Unidad de almacenamiento de estado sólido para guardar archivos, aplicaciones y juegos.",
        specifications: {
            "Capacidad anunciada": "2 TB",
            "Tipo buscado": "SSD NVMe",
            "Uso": "Almacenamiento",
            "Importante": "Verificar interfaz y compatibilidad"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/20-156-635-01.jpg",
        productUrl: ""
    },

    {
        id: "LP-009",
        name: "Laptop Ultraligera 14",
        category: "laptop",
        label: "Laptop",
        brand: "Varias marcas",
        price: 899.99,
        featured: false,
        search: "14 inch ultrabook laptop",
        description: "Laptop compacta pensada para estudiar, trabajar y transportar fácilmente.",
        specifications: {
            "Categoría": "Laptop",
            "Tamaño anunciado": "14 pulgadas",
            "Uso": "Estudio y productividad"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/34-156-634-01.jpg",
        productUrl: ""
    },

    {
        id: "MB-010",
        name: "Smartphone Compact",
        category: "mobile",
        label: "Celular",
        brand: "Varias marcas",
        price: 499.99,
        featured: false,
        search: "unlocked compact smartphone",
        description: "Teléfono inteligente de formato compacto para las tareas cotidianas.",
        specifications: {
            "Categoría": "Smartphone",
            "Formato": "Compacto",
            "Uso": "Comunicación y aplicaciones"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/75-151-073-01.jpg",
        productUrl: ""
    },

    {
        id: "DT-011",
        name: "Desktop Oficina",
        category: "desktop",
        label: "Desktop",
        brand: "Varias marcas",
        price: 599.99,
        featured: false,
        search: "business desktop PC",
        description: "Computadora de escritorio para tareas de oficina, navegación y productividad.",
        specifications: {
            "Categoría": "PC de escritorio",
            "Uso": "Oficina y estudio",
            "Formato": "Equipo de escritorio"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-502-01.jpg",
        productUrl: ""
    },

    {
        id: "CP-012",
        name: "Fuente de poder 850 W",
        category: "component",
        label: "Energía",
        brand: "Varias marcas",
        price: 129.99,
        featured: false,
        search: "850W 80 plus gold power supply",
        description: "Fuente de alimentación para suministrar energía a los componentes de una computadora.",
        specifications: {
            "Potencia anunciada": "850 W",
            "Certificación buscada": "80 PLUS Gold",
            "Importante": "Verificar modelo, conectores y certificación"
        },
        image: "https://c1.neweggimages.com/productimage/nb640/17-139-287-01.jpg",
        productUrl: ""
    }
];


// =========================================
// CATEGORÍAS
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
const resetFilters = document.querySelector("#resetFilters");
const yearElement = document.querySelector("#year");


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
// IMÁGENES DE RESPALDO
// =========================================

function createFallbackImage(name, category) {
    const drawings = {
        workstation: `
            <rect x="80" y="45" width="220" height="125" rx="5"/>
            <rect x="95" y="60" width="190" height="95"/>
            <path d="M170 170v30h40v-30 M140 205h100"/>
            <path d="M115 85h150 M115 100h110 M115 115h130"/>
        `,

        desktop: `
            <rect x="125" y="35" width="130" height="170" rx="5"/>
            <rect x="140" y="50" width="100" height="140"/>
            <circle cx="190" cy="85" r="22"/>
            <circle cx="190" cy="140" r="22"/>
            <circle cx="190" cy="85" r="8"/>
            <circle cx="190" cy="140" r="8"/>
        `,

        laptop: `
            <path d="M105 55h170v115H105z"/>
            <rect x="118" y="68" width="144" height="88"/>
            <path d="M105 170L80 195h220l-25-25z"/>
            <path d="M155 181h70"/>
        `,

        mobile: `
            <rect x="145" y="25" width="90" height="190" rx="12"/>
            <rect x="153" y="43" width="74" height="150" rx="4"/>
            <circle cx="190" cy="203" r="4"/>
            <path d="M177 34h26"/>
        `,

        component: `
            <rect x="90" y="45" width="200" height="145" rx="4"/>
            <rect x="130" y="75" width="120" height="85"/>
            <rect x="145" y="90" width="90" height="55"/>
            <path d="M105 190v18 M130 190v18 M155 190v18 M180 190v18 M205 190v18 M230 190v18 M255 190v18 M280 190v18"/>
            <path d="M90 65h-15v25h15 M290 65h15v25h-15"/>
        `
    };

    const drawing = drawings[category] || drawings.component;

    const safeName = String(name)
        .replace(/[&<>"']/g, "")
        .slice(0, 30);

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="380"
             height="250"
             viewBox="0 0 380 250">

            <rect width="380" height="250" fill="#e7e4d4"/>

            <g stroke="#33ff33" stroke-width="1" opacity="0.2">
                ${Array.from({ length: 13 }, (_, i) =>
                    `<path d="M0 ${i * 20} H380"/>`
                ).join("")}
            </g>

            <g fill="none"
               stroke="#202820"
               stroke-width="4"
               stroke-linejoin="round"
               stroke-linecap="round">
                ${drawing}
            </g>

            <g fill="#202820"
               font-family="monospace"
               text-anchor="middle">

                <text x="190" y="230" font-size="12">
                    ${safeName}
                </text>

                <text x="190" y="243" font-size="8">
                    BYTE BAZAAR // ${category.toUpperCase()}
                </text>
            </g>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


// =========================================
// ENLACES A PRODUCTOS
// =========================================

function getProductUrl(product) {
    // Utiliza la URL directa si se ha configurado.
    if (product.productUrl && product.productUrl.trim() !== "") {
        return product.productUrl;
    }

    // Alternativa: buscar productos similares en Newegg.
    return "https://www.newegg.com/p/pl?d=" +
        encodeURIComponent(product.search);
}


// =========================================
// CREAR TARJETA
// =========================================

function makeProductCard(product) {
    const card = document.createElement("article");

    card.className = "product-card";

    const productUrl = getProductUrl(product);

    const specificationsHTML = Object.entries(
        product.specifications || {}
    ).map(([key, value]) => `
        <li>
            <strong>${key}:</strong> ${value}
        </li>
    `).join("");

    card.innerHTML = `
        <div class="product-image-wrap">

            <span class="product-tag">
                ${categoryNames[product.category] || "Producto"}
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
                ${categoryNames[product.category] || "Producto"}
            </span>

            <h3>${product.name}</h3>

            <p class="product-description">
                ${product.description || "Información no disponible."}
            </p>

            <p class="product-brand">
                MARCA: ${product.brand || "No especificada"}
            </p>

            <details class="product-specifications">
                <summary>VER ESPECIFICACIONES [+]</summary>

                <ul>
                    ${specificationsHTML}
                </ul>
            </details>

            <div class="product-bottom">

                <div class="price">
                    ${formatPrice(product.price)}

                    <small>PRECIO ESTIMADO</small>
                </div>

                <a
                    class="product-link"
                    href="${productUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buscar ${product.name} en Newegg"
                >
                    VER PRODUCTO ↗
                </a>

            </div>

        </div>
    `;

    // Imagen alternativa si falla la imagen externa.
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
// FILTRAR Y ORDENAR
// =========================================

function getVisibleProducts() {
    const query = searchInput.value.trim().toLowerCase();

    let category = categoryFilter.value;

    // El HTML utiliza "components", pero los productos
    // guardan la categoría como "component".
    if (category === "components") {
        category = "component";
    }

    let visible = products.filter(product => {
        const searchableText = [
            product.id,
            product.name,
            product.label,
            product.brand,
            product.description,
            product.search,
            categoryNames[product.category],
            ...Object.values(product.specifications || {})
        ].join(" ").toLowerCase();

        const matchesQuery = searchableText.includes(query);

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesQuery && matchesCategory;
    });

    switch (sortFilter.value) {
        case "price-asc":
        case "low":
            visible.sort((a, b) => a.price - b.price);
            break;

        case "price-desc":
        case "high":
            visible.sort((a, b) => b.price - a.price);
            break;

        case "name-asc":
        case "name":
            visible.sort((a, b) =>
                a.name.localeCompare(b.name, "es")
            );
            break;

        default:
            visible.sort((a, b) =>
                Number(b.featured) - Number(a.featured)
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

    productGrid.replaceChildren();

    const cards = visible.map(product =>
        makeProductCard(product)
    );

    productGrid.append(...cards);

    resultCount.textContent =
        `${String(visible.length).padStart(2, "0")} PRODUCTOS`;

    emptyState.hidden = visible.length !== 0;
    productGrid.hidden = visible.length === 0;
}


// =========================================
// EVENTOS DE FILTRADO
// =========================================

searchInput.addEventListener("input", renderProducts);

categoryFilter.addEventListener("change", renderProducts);

sortFilter.addEventListener("change", renderProducts);


// =========================================
// REINICIAR FILTROS
// =========================================

if (resetFilters) {
    resetFilters.addEventListener("click", () => {
        searchInput.value = "";
        categoryFilter.value = "all";
        sortFilter.value = "default";

        renderProducts();
    });
}


// =========================================
// AÑO DEL FOOTER
// =========================================

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================
// INICIAR CATÁLOGO
// =========================================

renderProducts();
