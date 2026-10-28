/* script.js */
const products = [
    {
        id: 1,
        name: "Lenovo ThinkStation P3",
        category: "workstation",
        description: "Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA T1000. Alta capacidad para diseno e ingenieria.",
        price: "$1,499.99",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 2,
        name: "HP Z2 Tower G9",
        category: "workstation",
        description: "Intel Xeon W-1250, 64GB ECC RAM, 2TB NVMe SSD. Estabilidad empresarial extrema.",
        price: "$2,150.00",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 3,
        name: "PC Desktop Gamer Advanced",
        category: "desktop",
        description: "AMD Ryzen 5, 16GB DDR4, 500GB SSD, RTX 3060. Optimizada para estaciones de computo estandar.",
        price: "$899.99",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 4,
        name: "Acer Aspire TC Tower",
        category: "desktop",
        description: "Intel Core i5, 12GB RAM, 512GB SSD. Computadora de escritorio eficiente para oficina y escuela.",
        price: "$549.99",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 5,
        name: "MSI Cyborg 15 Laptop",
        category: "laptop",
        description: "Intel Core i7, RTX 4060, 16GB RAM, 512GB SSD. Rendimiento portatil de ultima generacion.",
        price: "$1,099.00",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 6,
        name: "ASUS Zenbook 14 Slim",
        category: "laptop",
        description: "AMD Ryzen 7, 16GB RAM, 1TB SSD. Chasis de aluminio ultra liviano con pantalla de alta definicion.",
        price: "$799.99",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 7,
        name: "Samsung Galaxy S24 Ultra",
        category: "mobile",
        description: "5G, 256GB Almacenamiento, Camara de 200MP, Pantalla Dynamic AMOLED. Rendimiento premium.",
        price: "$1,199.99",
        image: "https://newegg.com",
        url: "https://newegg.com"
    },
    {
        id: 8,
        name: "Motorola Edge 2024",
        category: "mobile",
        description: "5G, 256GB Almacenamiento, Pantalla Fluida de 144Hz. Dispositivo movil versatil de gama media alta.",
        price: "$549.99",
        image: "https://newegg.com",
        url: "https://newegg.com"
    }
];

function displayProducts(productsToRender) {
    const container = document.getElementById('catalog-container');
    container.innerHTML = '';

    if (productsToRender.length === 0) {
        container.innerHTML = '<p class="error-msg">NO SE ENCONTRARON REGISTROS EN LA BASE DE DATOS.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div>
                <div class="image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h2>${product.name.toUpperCase()}</h2>
                    <p>${product.description}</p>
                </div>
            </div>
            <div>
                <div class="product-price">${product.price}</div>
                <a href="${product.url}" target="_blank" class="buy-btn">[ ADQUIRIR ]</a>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterProducts(category) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const event = window.event;
    if(event) {
        event.target.classList.add('active');
    }

    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

window.onload = () => {
    displayProducts(products);
};
