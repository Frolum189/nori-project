const productsData = [
    // --- БОКСЫ И СЕТЫ ---
    {
        id: 1,
        name: 'Хайп Фила 1кг',
        category: 'boxes',
        price: 718,
        oldPrice: 910,
        pieces: 44,
        weight: '1кг',
        image: 'https://picsum.photos/320/240?random=1',
        url: 'product-page.html?id=1'
    },
    {
        id: 2,
        name: 'Сет "Вечеринка"',
        category: 'boxes',
        price: 950,
        oldPrice: 1200,
        pieces: 52,
        weight: '1.2кг',
        image: 'https://picsum.photos/320/240?random=2',
        url: 'product-page.html?id=2'
    },
    {
        id: 3,
        name: 'Мини Сет',
        category: 'boxes',
        price: 450,
        oldPrice: null,
        pieces: 24,
        weight: '600г',
        image: 'https://picsum.photos/320/240?random=3',
        url: 'product-page.html?id=3'
    },
    {
        id: 4,
        name: 'Филадельфия XL',
        category: 'boxes',
        price: 800,
        oldPrice: null,
        pieces: 32,
        weight: '900г',
        image: 'https://picsum.photos/320/240?random=4',
        url: 'product-page.html?id=4'
    },

    // --- НАПИТКИ ---
    {
        id: 7,
        name: 'Моршинская 0.75 Газ',
        category: 'drinks',
        price: 35,
        oldPrice: null,
        pieces: 1,
        weight: '0.75л',
        image: 'https://picsum.photos/320/240?random=7',
        url: 'product-page.html?id=7'
    },

    // --- ФИЛАДЕЛЬФИЯ (rolls-phila) ---
    {
        id: 8,
        name: 'Филадельфия Классик',
        category: 'rolls-phila',
        price: 245,
        oldPrice: 280,
        pieces: 8,
        weight: '260г',
        image: 'https://picsum.photos/320/240?random=8',
        url: 'product-page.html?id=8'
    },
    {
        id: 9,
        name: 'Филадельфия с Угрем',
        category: 'rolls-phila',
        price: 310,
        oldPrice: null,
        pieces: 8,
        weight: '270г',
        image: 'https://picsum.photos/320/240?random=9',
        url: 'product-page.html?id=9'
    },

    // --- ГОРЯЧИЕ РОЛЛЫ (rolls-hot) ---
    {
        id: 10,
        name: 'Темпура с Креветкой',
        category: 'rolls-hot',
        price: 215,
        oldPrice: 250,
        pieces: 8,
        weight: '280г',
        image: 'https://picsum.photos/320/240?random=10',
        url: 'product-page.html?id=10'
    },

    // --- КАЛИФОРНИЯ (rolls-cali) ---
    {
        id: 12,
        name: 'Калифорния в кунжуте',
        category: 'rolls-cali',
        price: 195,
        oldPrice: null,
        pieces: 8,
        weight: '240г',
        image: 'https://picsum.photos/320/240?random=12',
        url: 'product-page.html?id=12'
    },

    // --- САШИМИ (sashimi) ---
    {
        id: 15,
        name: 'Сашими Лосось',
        category: 'sashimi',
        price: 180,
        oldPrice: null,
        pieces: 5,
        weight: '100г',
        image: 'https://picsum.photos/320/240?random=15',
        url: 'product-page.html?id=15'
    },

    // --- WOK (wok) ---
    {
        id: 19,
        name: 'Удон с Курицей',
        category: 'wok',
        price: 165,
        oldPrice: null,
        pieces: 1,
        weight: '350г',
        image: 'https://picsum.photos/320/240?random=19',
        url: 'product-page.html?id=19'
    },

    // --- ГЕДЗА (gyoza) ---
    {
        id: 21,
        name: 'Гедза с Курицей',
        category: 'gyoza',
        price: 140,
        oldPrice: null,
        pieces: 5,
        weight: '150г',
        image: 'https://picsum.photos/320/240?random=21',
        url: 'product-page.html?id=21'
    }
];

let cart = [];
const savedCart = localStorage.getItem("item_cart");

if (savedCart) {
    cart = JSON.parse(savedCart);
}

async function renderProducts(category = 'boxes') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '<div style="text-align: center; grid-column: 1/-1;">Загрузка...</div>';

    try {
        await new Promise(resolve => setTimeout(resolve, 150));

        grid.innerHTML = '';
        const filtered = productsData.filter(p => p.category === category);

        if (filtered.length === 0) {
            grid.innerHTML = '<div style="text-align: center; grid-column: 1/-1; color: #666;">В этой категории пока нет товаров</div>';
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}">

                <div class="product-name">${p.name}</div>

                ${p.oldPrice
                        ? `<span class="old-price">${p.oldPrice} грн</span>`
                        : `<span class="old-price empty"></span>`
                        }

                <div class="product-info-row">
                    <span class="current-price">${p.price} грн</span>
                    <span class="product-meta">${p.pieces} шт | ${p.weight}</span>
                </div>

                <button class="add-btn" onclick="addToCart(${p.id})">
                    В корзину
                </button>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = `<div style="text-align: center; grid-column: 1/-1; color: red;">Ошибка загрузки: ${error.message}</div>`;
    }
}

// Корзиночка
async function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;

    try {
        console.log(`[API] Добавление товара ${id} в корзину...`);

        await new Promise(resolve => setTimeout(resolve, 100));

        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.count++;
        } else {
            cart.push({...product, count: 1});
        }

        renderCart();
        console.log(`[API] Товар ${product.name} успешно добавлен.`);
    } catch (error) {
        alert("Не удалось добавить товар в корзину");
    }
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalCountTop = document.getElementById('totalCountTop');
    const itemsInCartText = document.getElementById('itemsInCartText');
    const totalPriceEl = document.getElementById('totalPrice');

    container.innerHTML = '';
    let totalCount = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalCount += item.count;
        totalPrice += item.price * item.count;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info" data-id="${item.id}">
                <span class="count">${item.count}</span>
                <span class="name">${item.name}</span>
                <button class="remove-btn">&times;</button>
            </div>
            <div style="border-bottom: 1px dotted #333; flex: 1; margin: 0 10px;"></div>
            <span>${item.price * item.count} грн</span>
        `;
        container.appendChild(div);
    });

    if (cart.length === 0) {
        container.innerHTML = '<div style="color: #444; text-align: center; margin-top: 20px;">Корзина пуста</div>';
    }

    totalCountTop.innerText = `${totalCount} шт`;
    itemsInCartText.innerText = `В корзине ${cart.length} товара`;
    totalPriceEl.innerText = `${totalPrice} грн`;

    localStorage.setItem("item_cart", JSON.stringify(cart));
}

renderCart();

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const cat = this.dataset.category;
            document.getElementById('categoryTitle').innerText = this.innerText;
            renderProducts(cat);
        });
    });
});

document.getElementById('cartItems').addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
        const id = +e.target.closest('.cart-item-info').dataset.id;
        removeFromCart(id);
    }
});

function removeFromCart(id) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx !== -1) {
        cart.splice(idx, 1);
        renderCart();
    }
}