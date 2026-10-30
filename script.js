
/* =========================================================
   BYTE BAZAAR — PRODUCT CATALOG
   Complete script.js
   ========================================================= */

const products = [
    {
        id: "WS-001",
        name: "Workstation Creator Pro",
        category: "workstation",
        label: "Workstation",
        brand: "BYTE BAZAAR",
        price: 2499.99,
        featured: true,
        description: "Estación de trabajo diseñada para creación de contenido, edición de video y tareas profesionales.",
        search: "workstation creator pro computadora profesional",
        productUrl: "",
        image: "",
        specifications: {
            "Tipo": "Workstation",
            "Uso": "Creación de contenido",
            "Categoría": "Computadora profesional"
        }
    },
    {
        id: "DT-002",
        name: "Desktop Gaming Tower",
        category: "desktop",
        label: "Desktop Gaming",
        brand: "BYTE BAZAAR",
        price: 1399.99,
        featured: true,
        description: "Computadora de escritorio para gaming, multitarea y entretenimiento.",
        search: "desktop gaming tower pc computadora gaming",
        productUrl: "",
        image: "",
        specifications: {
            "Tipo": "Desktop",
            "Uso": "Gaming",
            "Formato": "Torre"
        }
    },
    {
        id: "LP-003",
        name: "Laptop Performance 16",
        category: "laptop",
        label: "Laptop",
        brand: "BYTE BAZAAR",
        price: 1199.99,
        featured: false,
        description: "Laptop de alto rendimiento para productividad, trabajo y entretenimiento.",
        search: "laptop performance 16 pulgadas",
        productUrl: "",
        image: "",
        specifications: {
            "Tipo": "Laptop",
            "Pantalla": "16 pulgadas",
            "Uso": "Productividad y entretenimiento"
        }
    },
    {
        id: "MB-004",
        name: "Samsung Galaxy A16 5G",
        category: "mobile",
        label: "Smartphone Android",
        brand: "Samsung",
        price: 199.99,
        featured: false,
        description: "Smartphone Android 5G con pantalla Super AMOLED de 6.7 pulgadas y 128 GB de almacenamiento.",
        search: "Samsung Galaxy A16 5G",
        productUrl: "https://www.samsung.com/us/smartphones/galaxy-a16-5g/",
        image: "",
        specifications: {
            "Modelo": "Galaxy A16 5G",
            "Pantalla": "6.7 pulgadas Super AMOLED",
            "Almacenamiento": "128 GB",
            "Conectividad": "5G",
            "Sistema operativo": "Android"
        }
    },
    {
        id: "CP-005",
        name: "GIGABYTE GeForce RTX 5070",
        category: "component",
        label: "Tarjeta gráfica",
        brand: "GIGABYTE",
        price: 649.99,
        featured: true,
        description: "Tarjeta gráfica NVIDIA GeForce RTX 5070 con 12 GB de memoria GDDR7.",
        search: "GIGABYTE GeForce RTX 5070 12GB",
        productUrl: "https://www.newegg.com/gigabyte-gv-n5070gaming-oc-12gd-geforce-rtx-5070-12gb-graphics-card-triple-fans/p/N82E16814932774",
        image: "https://c1.neweggimages.com/productimage/nb640/14-932-774-01.jpg",
        specifications: {
            "Modelo": "GeForce RTX 5070",
            "Memoria": "12 GB GDDR7",
            "Marca": "GIGABYTE",
            "Tipo": "Tarjeta gráfica"
        }
    },
    {
        id: "CP-006",
        name: "AMD Ryzen 7 9800X3D",
        category: "component",
        label: "Procesador",
        brand: "AMD",
        price: 329.99,
        featured: true,
        description: "Procesador AMD Ryzen 7 9800X3D para computadoras de escritorio con tecnología 3D V-Cache.",
        search: "AMD Ryzen 7 9800X3D",
        productUrl: "https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-desktop-cpu-processor/p/N82E16819113877",
        image: "https://c1.neweggimages.com/productimage/nb640/19-113-877-01.jpg",
        specifications: {
            "Modelo": "Ryzen 7 9800X3D",
            "Marca": "AMD",
            "Socket": "AM5",
            "Arquitectura": "Zen 5",
            "Tipo": "Procesador de escritorio"
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
        productUrl: "https://www.newegg.com/corsair-vengeance-rgb-32gb-ddr5-6000-cas-latency-cl38-desktop-memory-black/p/N82E16820982128",
        image: "https://c1.neweggimages.com/productimage/nb1280/20-236-879-03.jpg",
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
        name: "SSD NVMe 2 TB",
        category: "component",
        label: "Almacenamiento",
        brand: "BYTE BAZAAR",
        price: 149.99,
        featured: false,
        description: "Unidad de almacenamiento SSD NVMe de 2 TB para mejorar la velocidad y capacidad del sistema.",
        search: "SSD NVMe 2TB almacenamiento",
        productUrl: "",
        image: "",
        specifications: {
            "Capacidad": "2 TB",
            "Tipo": "SSD NVMe",
            "Uso": "Almacenamiento interno"
        }
    },
    {
        id: "LP-009",
        name: "Laptop Ultraligera 14",
        category: "laptop",
        label: "Laptop",
        brand: "BYTE BAZAAR",
        price: 899.99,
        featured: false,
        description: "Laptop ultraligera de 14 pulgadas pensada para movilidad, estudios y productividad.",
        search: "laptop ultraligera 14 pulgadas",
        productUrl: "",
        image: "",
        specifications: {
            "Tipo": "Laptop",
            "Pantalla": "14 pulgadas",
            "Diseño": "Ultraligero",
            "Uso": "Estudio y productividad"
        }
    },
    {
        id: "MB-010",
        name: "Unihertz Jelly Star",
        category: "mobile",
        label: "Smartphone Android Compacto",
        brand: "Unihertz",
        price: 219.99,
        featured: false,
        description: "Smartphone Android ultracompacto con pantalla de 3 pulgadas, diseño transparente y luces LED.",
        search: "Unihertz Jelly Star",
        productUrl: "https://www.unihertz.com/products/jelly-star",
        image: "",
        specifications: {
            "Modelo": "Jelly Star",
            "Pantalla": "3.0 pulgadas",
            "Procesador": "MediaTek Helio G99",
            "RAM": "8 GB",
            "Almacenamiento": "256 GB",
            "Sistema operativo": "Android 13",
            "Cámara trasera": "48 MP"
        }
    },
    {
        id: "DT-011",
        name: "Desktop Oficina",
        category: "desktop",
        label: "Desktop",
        brand: "BYTE BAZAAR",
        price: 599.99,
        featured: false,
        description: "Computadora de escritorio para tareas de oficina, navegación, estudios y productividad diaria.",
        search: "desktop oficina computadora trabajo",
        productUrl: "",
        image: "",
        specifications: {
            "Tipo": "Desktop",
            "Uso": "Oficina y productividad",
            "Formato": "Torre"
        }
    },
    {
        id: "CP-012",
        name: "Fuente de Poder 850 W",
        category: "component",
        label: "Fuente de poder",
        brand: "BYTE BAZAAR",
        price: 129.99,
        featured: false,
        description: "Fuente de alimentación de 850 W para computadoras de escritorio y sistemas gaming.",
        search: "fuente de poder PSU 850W",
        productUrl: "",
        image: "",
        specifications: {
            "Potencia": "850 W",
            "Tipo": "Fuente de alimentación",
            "Uso": "Computadora de escritorio"
        }
    }
];

/* =========================================================
   ELEMENTOS DEL HTML
   ========================================================= */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resetFilters = document.getElementById("resetFilters");
const yearElement = document.getElementById("year");

/* =========================================================
   IMÁGENES DE RESPALDO
   ========================================================= */

function getFallbackImage(category) {
    const icons = {
        workstation: "▣",
        desktop: "▤",
        laptop: "▱",
        mobile: "▯",
        component: "⚙"
    };

    const icon = icons[category] || "▣";

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420">
            <rect width="600" height="420" fill="#07110b"/>
            <rect x="18" y="18" width="564" height="384" rx="8"
                fill="none" stroke="#39ff78" stroke-width="3" opacity=".55"/>
            <text x="300" y="215" text-anchor="middle"
                font-family="monospace" font-size="100" fill="#39ff78">${icon}</text>
            <text x="300" y="285" text-anchor="middle"
                font-family="monospace" font-size="23" fill="#39ff78">BYTE BAZAAR</text>
            <text x="300" y="325" text-anchor="middle"
                font-family="monospace" font-size="13" fill="#8ab99a">IMAGE NOT AVAILABLE</text>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/* =========================================================
   ENLACES DE PRODUCTOS
   ========================================================= */

function getProductUrl(product) {
    if (product.productUrl && product.productUrl.trim() !== "") {
        return product.productUrl;
    }

    // Solo se usa como respaldo para productos sin URL individual.
    return "https://www.newegg.com/p/pl?d=" +
        encodeURIComponent(product.search || product.name);
}

/* =========================================================
   CREAR TARJETA DE PRODUCTO
   ========================================================= */

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image || getFallbackImage(product.category);
    image.alt = product.name;
    image.loading = "lazy";

    image.onerror = function () {
        this.onerror = null;
        this.src = getFallbackImage(product.category);
    };

    imageWrap.appendChild(image);

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = product.label;

    const id = document.createElement("span");
    id.className = "product-id";
    id.textContent = product.id;

    const heading = document.createElement("h3");
    heading.textContent = product.name;

    const brand = document.createElement("p");
    brand.className = "product-brand";
    brand.textContent = product.brand;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = "$" + product.price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const link = document.createElement("a");
    link.className = "product-link";
    link.href = getProductUrl(product);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "VER PRODUCTO ↗";

    info.appendChild(category);
    info.appendChild(id);
    info.appendChild(heading);
    info.appendChild(brand);
    info.appendChild(description);
    info.appendChild(price);
    info.appendChild(link);

    // Especificaciones desplegables
    if (product.specifications) {
        const details = document.createElement("details");
        details.className = "product-details";

        const summary = document.createElement("summary");
        summary.textContent = "ESPECIFICACIONES";

        const specs = document.createElement("ul");

        Object.entries(product.specifications).forEach(([key, value]) => {
            const item = document.createElement("li");
            item.textContent = `${key}: ${value}`;
            specs.appendChild(item);
        });

        details.appendChild(summary);
        details.appendChild(specs);
        info.appendChild(details);
    }

    card.appendChild(imageWrap);
    card.appendChild(info);

    return card;
}

/* =========================================================
   FILTRAR, BUSCAR Y ORDENAR
   ========================================================= */

function getFilteredProducts() {
    let filtered = [...products];

    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    const selectedSort = sortFilter
        ? sortFilter.value
        : "default";

    if (searchTerm) {
        filtered = filtered.filter(product => {
            const searchableText = [
                product.id,
                product.name,
                product.brand,
                product.label,
                product.category,
                product.description,
                product.search,
                ...Object.values(product.specifications || {})
            ].join(" ").toLowerCase();

            return searchableText.includes(searchTerm);
        });
    }

    if (selectedCategory && selectedCategory !== "all") {
        filtered = filtered.filter(product =>
            product.category === selectedCategory
        );
    }

    switch (selectedSort) {
        case "price-low":
        case "price-asc":
            filtered.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
        case "price-desc":
            filtered.sort((a, b) => b.price - a.price);
            break;

        case "name":
        case "name-asc":
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;

        case "name-desc":
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;

        case "default":
        default:
            filtered.sort((a, b) => {
                if (a.featured !== b.featured) {
                    return Number(b.featured) - Number(a.featured);
                }

                return a.id.localeCompare(b.id);
            });
            break;
    }

    return filtered;
}

/* =========================================================
   MOSTRAR PRODUCTOS
   ========================================================= */

function renderProducts() {
    if (!productGrid) {
        console.error("BYTE BAZAAR: No se encontró #productGrid en el HTML.");
        return;
    }

    const filteredProducts = getFilteredProducts();

    productGrid.innerHTML = "";

    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });

    if (resultCount) {
        resultCount.textContent =
            `${filteredProducts.length} PRODUCTOS ENCONTRADOS`;
    }

    if (emptyState) {
        emptyState.hidden = filteredProducts.length !== 0;
    }

    productGrid.hidden = filteredProducts.length === 0;
}

/* =========================================================
   EVENTOS DE LOS FILTROS
   ========================================================= */

if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", renderProducts);
}

if (sortFilter) {
    sortFilter.addEventListener("change", renderProducts);
}

if (resetFilters) {
    resetFilters.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (categoryFilter) categoryFilter.value = "all";
        if (sortFilter) sortFilter.value = "default";

        renderProducts();
    });
}

/* =========================================================
   AÑO AUTOMÁTICO
   ========================================================= */

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =========================================================
   INICIAR CATÁLOGO
   ========================================================= */

renderProducts();

console.log(`BYTE BAZAAR: ${products.length} productos cargados correctamente.`);
