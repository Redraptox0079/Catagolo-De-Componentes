// Base de datos de productos con URLs directas de recursos e imagenes de Newegg
const products = [
    {
        id: 1,
        name: "AMD Threadripper PRO 7995WX",
        category: "workstation",
        price: "$9999.99",
        description: "96 nucleos, 192 hilos. Disenado para calculo masivo y estaciones de trabajo profesionales de alto rendimiento.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 2,
        name: "NVIDIA RTX 6000 Ada Generation",
        category: "workstation",
        price: "$6799.49",
        description: "48GB GDDR6 con ECC. Arquitectura Ada Lovelace para renderizado ultra complejo y simulacion cientifica avanzada.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 3,
        name: "Intel Core i9-14900K Desktop",
        category: "desktop",
        price: "$529.99",
        description: "Procesador para escritorio de alta gama. 24 nucleos, velocidad maxima de 6.0 GHz para tareas exigentes.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 4,
        name: "G.SKILL Trident Z5 RGB 64GB",
        category: "desktop",
        price: "$219.99",
        description: "Memoria RAM DDR5 6400MHz optimizada para plataformas de ultima generacion y multitarea intensiva.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 5,
        name: "ASUS ROG Strix Scar 18",
        category: "laptop",
        price: "$3899.00",
        description: "Pantalla de 18 pulgadas, Intel i9, RTX 4090, 32GB DDR5. El reemplazo definitivo para tu computadora de escritorio.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 6,
        name: "ThinkPad X1 Carbon Gen 12",
        category: "laptop",
        price: "$1849.99",
        description: "Chasis ultra liviano de fibra de carbono. Intel Core Ultra 7, enfocado en productividad y entornos empresariales.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 7,
        name: "SAMSUNG Galaxy S24 Ultra",
        category: "mobile",
        price: "$1299.99",
        description: "Dispositivo movil con Titanium Frame, almacenamiento de 512GB, camara de 200MP e inteligencia artificial integrada.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    },
    {
        id: 8,
        name: "Apple iPhone 15 Pro Max",
        category: "mobile",
        price: "$1199.00",
        description: "Chip A17 Pro, acabado en titanio de grado aeroespacial, sistema de camaras pro y conector universal USB-C.",
        image: "https://neweggimages.com",
        productUrl: "https://newegg.com"
    }
];

const catalogGrid = document.getElementById('catalog-grid');
const navButtons = document.querySelectorAll('.nav-btn');

function renderProducts(categoryFilter) {
    catalogGrid.innerHTML = '';
    
    const filteredProducts = categoryFilter === 'all' 
        ? products 
        : products.filter(p => p.category === categoryFilter);

    filteredProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div>
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
            <div>
                <div class="product-price">${product.price}</div>
                <a href="${product.productUrl}" target="_blank" class="buy-btn" style="display: block; text-align: center; text-decoration: none;">[ ADQUIRIR ]</a>
            </div>
        `;
        catalogGrid.appendChild(card);
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const category = e.target.getAttribute('data-category');
        renderProducts(category);
    });
});

// Inicializar el catalogo mostrando todos los productos
renderProducts('all');
