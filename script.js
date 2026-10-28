/* script.js */
const products = [
    {
        id: 1,
        name: "HP Z2 Mini G9 Workstation",
        category: "workstation",
        description: "Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA RTX A2000. Potencia compacta profesional.",
        price: "$1,649.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 2,
        name: "Lenovo ThinkStation P3 Tower",
        category: "workstation",
        description: "Intel Core i9, 64GB RAM, 2TB SSD, NVIDIA RTX 4000 Ada. Estacion avanzada de arquitectura.",
        price: "$2,899.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 3,
        name: "CyberPowerPC Gamer Master",
        category: "desktop",
        description: "AMD Ryzen 5, 16GB DDR5 memory, 500GB SSD, AMD Radeon RX 6500 XT. Estabilidad grafica basica.",
        price: "$649.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 4,
        name: "HP Desktop Intel Tower",
        category: "desktop",
        description: "Intel Core i3, 8GB RAM, 512GB SSD. Computadora basica ideal para tareas escolares y oficina diaria.",
        price: "$399.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 5,
        name: "HP Chromebook 14",
        category: "laptop",
        description: "Intel Celeron, 4GB memory, 64GB eMMC. Laptop ligera optimizada para navegacion web limpia.",
        price: "$299.00",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 6,
        name: "ASUS Vivobook 16 Slim",
        category: "laptop",
        description: "AMD Ryzen 7, 16GB memory, 1TB SSD. Portabilidad maxima con chasis moderno de alta eficiencia.",
        price: "$749.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 7,
        name: "Samsung Galaxy S24 Ultra",
        category: "mobile",
        description: "5G, 256GB Almacenamiento, Titanium Gray. Dispositivo insignia con funciones avanzadas de IA.",
        price: "$1,299.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
    },
    {
        id: 8,
        name: "Motorola Moto G Stylus 2024",
        category: "mobile",
        description: "5G, 128GB Almacenamiento, Lápiz Optico Integrado. Pantalla fluida y bateria de larga duracion.",
        price: "$399.99",
        image: "https://googleusercontent.com",
        url: "https://bestbuy.com"
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
    
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
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
