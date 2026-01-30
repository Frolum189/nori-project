# nori-project

## **Описание**
Магазин суш — учебный проект по созданию современного адаптивного интернет-магазина суши. В проекте реализован удобный интерфейс с интерактивными элементами, адаптивной версткой на Bootstrap и динамической работой с API для получения и отображения данных.

![Логотип nori-project](https://github.com/user-attachments/assets/2de5b876-9118-41a4-9e1a-ba42a31a4911)

## Демонстрация
Демонстрацию в реальном времени можно посмотреть здесь: (https://www.figma.com/design/N2E141xxJkCKOUH418woqh/Untitled?m=auto&t=NAkuXgXJhwnSEZeU-6)

## Use Cases
https://docs.google.com/document/d/1Rv5CX8gk0rNucJSTuxE-uf5U6yPrgpMlzyNHbvHxUn8/edit?usp=sharing

## План (может меняться)
- Ленивая загрузка
- Динамическая загрузка товаров через JavaScript
- Слайдер товаров (например, блок "Топ товары" или "Популярное")
- Карточки товаров с изображением, названием и ценой
- Работа с внешним API
- Добавление в корзину
- Добавление в избранные
- SPA (одностраничное приложение)

## Технологический стек
- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Bootstrap 5  
- Swiper
- REST API

## Структура проекта (Модульная архитектура)
```
src/
├─ modules/
│  ├─ shops/                  // Модуль магазинов + карта
│  │  ├─ pages/
│  │  │  └─ ShopsPage/
│  │  │     ├─ ShopsPage.jsx      // SPA-страница магазинов
│  │  │     └─ index.js
│  │  │     // импортирует ShopSearch, ShopList, Map
│  │  │     // получает данные через hooks/useShops.js
│  │  ├─ components/
│  │  │  ├─ ShopSearch/
│  │  │  │  ├─ ShopSearch.jsx
│  │  │  │  └─ index.js
│  │  │  │  // использует useShops.js для фильтрации
│  │  │  ├─ ShopList/
│  │  │  │  ├─ ShopList.jsx
│  │  │  │  └─ index.js
│  │  │  │  // импортирует ShopItem.jsx и useShops.js
│  │  │  ├─ ShopItem/
│  │  │  │  ├─ ShopItem.jsx
│  │  │  │  └─ index.js
│  │  │  │  // принимает props: название, адрес, координаты
│  │  │  └─ Map/
│  │  │     ├─ Map.jsx
│  │  │     └─ index.js
│  │  │     // импортирует useShops.js для маркеров
│  │  ├─ services/
│  │  │  └─ shopsApi.js           // REST API запросы к серверу магазинов
│  │  ├─ hooks/
│  │  │  └─ useShops.js           // Логика загрузки магазинов
│  │  └─ state/                   // Состояние, если понадобится
│  │
│  ├─ products/                // Модуль товаров и карточек
│  │  ├─ pages/
│  │  │  └─ ProductPage/
│  │  │     ├─ ProductPage.jsx
│  │  │     └─ index.js
│  │  │     // импортирует ProductInfo, ProductComments, AddComment
│  │  │     // получает данные через hooks/useProduct.js и useComments.js
│  │  ├─ components/
│  │  │  ├─ ProductInfo/
│  │  │  │  ├─ ProductInfo.jsx
│  │  │  │  └─ index.js
│  │  │  │  // использует useProduct.js
│  │  │  ├─ ProductComments/
│  │  │  │  ├─ ProductComments.jsx
│  │  │  │  └─ index.js
│  │  │  │  // использует useComments.js для localStorage
│  │  │  └─ AddComment/
│  │  │     ├─ AddComment.jsx
│  │  │     └─ index.js
│  │  │     // использует useComments.js для записи в localStorage
│  │  ├─ services/
│  │  │  ├─ productApi.js        // REST API для товара
│  │  │  └─ commentsApi.js       // опционально, если будет сервер
│  │  ├─ hooks/
│  │  │  ├─ useProduct.js
│  │  │  └─ useComments.js
│  │  └─ state/
│  │     └─ currentProduct.js
│  │
│  ├─ cart/                     // Модуль корзины
│  │  ├─ components/
│  │  │  ├─ CartPopup/
│  │  ├─ hooks/
│  │  │  └─ useCart.js
│  │  └─ state/
│  │     └─ cartStore.js
│  │
│  ├─ user/                     // Модуль авторизации и профиля
│  │  ├─ components/
│  │  │  ├─ LoginPopup/
│  │  │  └─ ProfileMenu/
│  │  ├─ hooks/
│  │  │  └─ useUser.js
│  │  └─ state/
│  │     └─ userStore.js
│  │
│  └─ about/                    // Модуль SPA страницы "О нас"
│     ├─ pages/
│     │  └─ AboutPage/
│     │  ├─ AboutPage.jsx     // SPA-страница с текстом о компании
│     
└─ public/                        // Статические файлы: изображения, иконки, карты
```
