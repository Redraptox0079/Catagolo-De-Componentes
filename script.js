// ============================================
// BYTE BAZAAR — CATÁLOGO RETRO
// ============================================

const products = [
    {
        id: "WS-001",
        name: "Workstation Creator Pro",
        category: "workstation",
        label: "Estación de trabajo",
        brand: "CyberPowerPC",
        price: 2259.99,
        featured: true,
        description: "Equipo de alto rendimiento para creación de contenido, diseño y multitarea.",
        search: "CyberPowerPC workstation creator desktop",
        productUrl: "https://www.newegg.com/p/pl?d=CyberPowerPC+workstation+desktop",
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-502-01.jpg",
        specifications: {
            "Categoría": "Estación de trabajo",
            "Uso": "Creación de contenido y productividad",
            "Configuración": "Verificar en la página del vendedor"
        }
    },

    {
        id: "DT-002",
        name: "ABS Flux II Gaming PC",
        category: "desktop",
        label: "Desktop gaming",
        brand: "ABS",
        price: 1799.99,
        featured: true,
        description: "PC gaming con procesador Intel Core i7, gráficos GeForce RTX 5070 y memoria DDR5.",
        search: "ABS Flux II Aqua i7-14700F RTX 5070",
        productUrl: "https://www.newegg.com/p/pl?d=ABS+Flux+II+Aqua+i7-14700F+RTX+5070",
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-491-01.jpg",
        specifications: {
            "Procesador": "Intel Core i7-14700F",
            "Tarjeta gráfica": "GeForce RTX 5070 de 12 GB",
            "Memoria": "32 GB DDR5",
            "Almacenamiento": "SSD NVMe de 1 TB",
            "Sistema operativo": "Windows 11 Home"
        }
    },

    {
        id: "LP-003",
        name: "Laptop MSI Gaming",
        category: "laptop",
        label: "Laptop",
        brand: "MSI",
        price: 1199.99,
        featured: true,
        description: "Laptop orientada a videojuegos, aplicaciones exigentes y productividad.",
        search: "MSI gaming laptop 16 inch",
        productUrl: "https://www.newegg.com/p/pl?d=MSI+gaming+laptop+16+inch",
        image: "https://c1.neweggimages.com/productimage/nb640/34-156-634-01.jpg",
        specifications: {
            "Marca": "MSI",
            "Categoría": "Laptop gaming",
            "Pantalla": "Consultar modelo específico",
            "Gráficos": "Consultar modelo específico"
        }
    },

    {
        id: "MB-004",
        name: "Smartphone Android",
        category: "mobile",
        label: "Celular",
        brand: "Varias marcas",
        price: 799.99,
        featured: false,
        description: "Teléfono inteligente para aplicaciones, fotografía, comunicación y entretenimiento.",
        search: "unlocked Android smartphone",
        productUrl: "https://www.newegg.com/p/pl?d=unlocked+Android+smartphone",
        image: "https://c1.neweggimages.com/productimage/nb640/75-151-073-01.jpg",
        specifications: {
            "Categoría": "Smartphone",
            "Sistema": "Android, según modelo",
            "Conectividad": "Consultar modelo específico",
            "Cámara": "Consultar modelo específico"
        }
    },

    {
        id: "CP-005",
        name: "GIGABYTE GeForce RTX 5070",
        category: "component",
        label: "Tarjeta gráfica",
        brand: "GIGABYTE / NVIDIA",
        price: 649.99,
        featured: true,
        description: "Tarjeta gráfica GeForce RTX 5070 con 12 GB de memoria para gaming y creación de contenido.",
        search: "GIGABYTE GeForce RTX 5070 12GB",
        productUrl: "https://www.newegg.com/gigabyte-gv-n5070gaming-oc-12gd-geforce-rtx-5070-12gb-graphics-card-triple-fans/p/N82E16814932774",
        image: "https://c1.neweggimages.com/productimage/nb640/14-932-774-01.jpg",
        specifications: {
            "Fabricante": "GIGABYTE",
            "GPU": "NVIDIA GeForce RTX 5070",
            "Memoria gráfica": "12 GB",
            "Tipo de memoria": "GDDR7",
            "Uso": "Gaming y creación de contenido"
        }
    },

    {
        id: "CP-006",
        name: "AMD Ryzen 7 9800X3D",
        category: "component",
        label: "Procesador",
        brand: "AMD",
        price: 444.00,
        featured: true,
        description: "Procesador de escritorio de 8 núcleos y 16 hilos, diseñado para ofrecer alto rendimiento en videojuegos.",
        search: "AMD Ryzen 7 9800X3D",
        productUrl: "https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-desktop-cpu-processor/p/N82E16819113877",
        image: "https://c1.neweggimages.com/productimage/nb640/19-113-877-01.jpg",
        specifications: {
            "Modelo": "Ryzen 7 9800X3D",
            "Núcleos": "8",
            "Hilos": "16",
            "Frecuencia máxima": "Hasta 5.2 GHz",
            "Socket": "AM5",
            "TDP": "120 W",
            "Memoria compatible": "DDR5"
        }
    },

    {
        id: "CP-007",
        name: "CORSAIR Vengeance RGB 32 GB",
        category: "component",
        label: "Memoria RAM",
        brand: "CORSAIR",
        price: 119.99,
        featured: false,
        description: "Kit de memoria DDR5 de 32 GB compuesto por dos módulos de 16 GB, con iluminación RGB.",
        search: "CORSAIR Vengeance RGB 32GB DDR5 6000",
        productUrl: "https://www.newegg.com/corsair-vengeance-rgb-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820236991",
        image: "https://c1.neweggimages.com/productimage/nb640/20-236-991-01.jpg",
        specifications: {
            "Modelo": "CORSAIR Vengeance RGB",
            "Capacidad": "32 GB (2 × 16 GB)",
            "Tipo": "DDR5",
            "Velocidad": "6000 MT/s",
            "Formato": "DIMM para escritorio",
            "Iluminación": "RGB"
        }
    },

    {
        id: "CP-008",
        name: "Samsung 990 PRO 2 TB",
        category: "component",
        label: "SSD NVMe",
        brand: "Samsung",
        price: 409.99,
        featured: false,
        description: "Unidad SSD NVMe PCIe 4.0 diseñada para almacenamiento rápido, videojuegos y estaciones de trabajo.",
        search: "Samsung 990 PRO 2TB",
        productUrl: "https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861",
        image: "https://c1.neweggimages.com/productimage/nb640/20-147-861-01.jpg",
        specifications: {
            "Modelo": "Samsung 990 PRO",
            "Capacidad": "2 TB",
            "Interfaz": "PCIe 4.0 x4 NVMe",
            "Formato": "M.2 2280",
            "Lectura secuencial anunciada": "Hasta 7,450 MB/s"
        }
    },

    {
        id: "LP-009",
        name: "Laptop Ultrabook 14",
        category: "laptop",
        label: "Laptop",
        brand: "Varias marcas",
        price: 899.99,
        featured: false,
        description: "Laptop compacta para estudiantes, trabajo de oficina y productividad diaria.",
        search: "14 inch ultrabook laptop",
        productUrl: "https://www.newegg.com/p/pl?d=14+inch+ultrabook+laptop",
        image: "https://c1.neweggimages.com/productimage/nb640/34-156-634-01.jpg",
        specifications: {
            "Categoría": "Laptop ultraligera",
            "Pantalla": "14 pulgadas, según modelo",
            "Uso": "Estudio y productividad",
            "Peso y batería": "Consultar modelo específico"
        }
    },

    {
        id: "MB-010",
        name: "Smartphone Android Compacto",
        category: "mobile",
        label: "Celular",
        brand: "Varias marcas",
        price: 499.99,
        featured: false,
        description: "Teléfono inteligente para comunicación, aplicaciones y entretenimiento en un formato compacto.",
        search: "compact unlocked Android smartphone",
        productUrl: "https://www.newegg.com/p/pl?d=compact+unlocked+Android+smartphone",
        image: "https://c1.neweggimages.com/productimage/nb640/75-151-073-01.jpg",
        specifications: {
            "Categoría": "Smartphone",
            "Formato": "Compacto, según modelo",
            "Sistema operativo": "Consultar modelo específico",
            "Almacenamiento": "Consultar modelo específico"
        }
    },

    {
        id: "DT-011",
        name: "CyberPowerPC Gaming Desktop",
        category: "desktop",
        label: "Desktop",
        brand: "CyberPowerPC",
        price: 2259.99,
        featured: false,
        description: "Computadora de escritorio con procesador Ryzen 7 9800X3D, memoria DDR5 y gráficos dedicados.",
        search: "CyberPowerPC Ryzen 7 9800X3D gaming desktop",
        productUrl: "https://www.newegg.com/p/pl?d=CyberPowerPC+Ryzen+7+9800X3D+gaming+desktop",
        image: "https://c1.neweggimages.com/productimage/nb640/83-360-502-01.jpg",
        specifications: {
            "Procesador buscado": "AMD Ryzen 7 9800X3D",
            "Categoría": "PC gaming",
            "Gráficos": "Consultar configuración",
            "Memoria y almacenamiento": "Consultar configuración"
        }
    },

    {
        id: "CP-012",
        name: "MSI MAG A850GL PCIE5",
        category: "component",
        label: "Fuente de poder",
        brand: "MSI",
        price: 109.99,
        featured: false,
        description: "Fuente de alimentación modular de 850 W con certificación 80 PLUS Gold y compatibilidad ATX 3.1.",
        search: "MSI MAG A850GL PCIE5 850W",
        productUrl: "https://www.newegg.com/msi-atx12v-850-w-80-plus-gold-certified-power-supplies-black-mag-a850gl-pcie5/p/N82E16817701021",
        image: "https://c1.neweggimages.com/productimage/nb640/17-701-021-01.jpg",
        specifications: {
            "Modelo": "MSI MAG A850GL PCIE5",
            "Potencia": "850 W",
            "Certificación": "80 PLUS Gold",
            "Diseño": "Totalmente modular",
            "Estándar": "ATX 3.1",
            "Garantía anunciada": "10 años; verificar condiciones"
        }
    }
];


// ============================================
// CATEGORÍAS
// ============================================

const categoryNames = {
    workstation: "Workstation",
    desktop: "Desktop",
    laptop: "Laptop",
    mobile: "Celulares móviles",
    component: "Componentes"
};


// ============================================
// ELEMENTOS HTML
// ============================================

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const resetFilters = document.querySelector("#resetFilters");
const yearElement = document.querySelector("#year");


// ============================================
// FORMATO DE PRECIO
// ============================================

function formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price);
}


// ============================================
// IMAGEN DE RESPALDO
// ============================================

function createFallbackImage(name, category) {
    const safeName = String(name)
        .replace(/[&<>"']/g, "")
        .slice(0, 35);

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="380" height="250"
             viewBox="0 0 380 250">

            <rect width="380" height="250" fill="#e7e4d4"/>

            <g fill="none" stroke="#202820" stroke-width="4">
                <rect x="120" y="45" width="140" height="110" rx="4"/>
                <rect x="132" y="57" width="116" height="85"/>
                <path d="M180 155v22h20v-22 M150 182h80"/>
            </g>

            <g fill="#202820" font-family="monospace" text-anchor="middle">
                <text x="190" y="100" font-size="13">BYTE / 001</text>
                <text x="190" y="215" font-size="12">${safeName}</text>
                <text x="190" y="232" font-size="9">${category.toUpperCase()}</text>
            </g>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


// ============================================
// CREAR TARJETA DE PRODUCTO
// ============================================

function makeProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    const specsHTML = Object.entries(product.specifications || {})
        .map(([key, value]) => `
            <li><strong>${key}:</strong> ${value}</li>
        `)
        .join("");

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

            <span class="product-code">${product.id}</span>
        </div>

        <div class="product-info">
            <span class="product-category">
                ${categoryNames[product.category]}
            </span>

            <h3>${product.name}</h3>

            <p class="product-description">
                ${product.description}
            </p>

            <p class="product-brand">
                MARCA: ${product.brand}
            </p>

            <details class="product-specifications">
                <summary>VER ESPECIFICACIONES [+]</summary>
                <ul>${specsHTML}</ul>
            </details>

            <div class="product-bottom">
                <div class="price">
                    ${formatPrice(product.price)}
                    <small>PRECIO DE REFERENCIA</small>
                </div>

                <a
                    class="product-link"
                    href="${product.productUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VER PRODUCTO ↗
                </a>
            </div>
        </div>
    `;

    const img = card.querySelector("img");

    img.addEventListener("error", () => {
        img.src = createFallbackImage(
            product.name,
            product.category
        );
    }, { once: true });

    return card;
}


// ============================================
// FILTRAR Y ORDENAR
// ============================================

function getVisibleProducts() {
    const query = searchInput.value.trim().toLowerCase();

    let category = categoryFilter.value;

    if (category === "components") {
        category = "component";
    }

    const visible = products.filter(product => {
        const searchable = [
            product.id,
            product.name,
            product.label,
            product.brand,
            product.description,
            product.search,
            categoryNames[product.category],
            ...Object.keys(product.specifications || {}),
            ...Object.values(product.specifications || {})
        ].join(" ").toLowerCase();

        const matchesQuery = searchable.includes(query);

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
    }

    return visible;
}


// ============================================
// MOSTRAR PRODUCTOS
// ============================================

function renderProducts() {
    const visible = getVisibleProducts();

    productGrid.replaceChildren();

    const cards = visible.map(makeProductCard);
    productGrid.append(...cards);

    resultCount.textContent =
        `${String(visible.length).padStart(2, "0")} PRODUCTOS`;

    emptyState.hidden = visible.length !== 0;
    productGrid.hidden = visible.length === 0;
}


// ============================================
// EVENTOS
// ============================================

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);

if (resetFilters) {
    resetFilters.addEventListener("click", () => {
        searchInput.value = "";
        categoryFilter.value = "all";
        sortFilter.value = "default";
        renderProducts();
    });
}

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ============================================
// INICIAR
// ============================================

renderProducts();
