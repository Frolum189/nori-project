# nori-project

## **Описание**
Магазин суш — учебный проект по созданию современного адаптивного интернет-магазина суши. В проекте реализован удобный интерфейс с интерактивными элементами, адаптивной версткой на Bootstrap и динамической работой с API для получения и отображения данных.

![Логотип nori-project](https://github.com/user-attachments/assets/2de5b876-9118-41a4-9e1a-ba42a31a4911)

## Демонстрация
Демонстрацию в реальном времени можно посмотреть здесь: (https://www.figma.com/design/N2E141xxJkCKOUH418woqh/Untitled?m=auto&t=NAkuXgXJhwnSEZeU-6)

https://sushitop-44afc.web.app/

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
SushiTop
├── public/
│   └── 1.txt
│
├── src/
│   ├── App.jsx
│   ├── index.jsx
│   │
│   └── modules/
│       ├── about/                   // Модуль страницы "О нас"
│       │   └── pages/
│       │       └── AboutPage/
│       │           └── AboutPage.jsx
│       │
│       ├── cart/                    // Модуль корзины
│       │   ├── components/
│       │   │   └── CartPopup/
│       │   │       └── cartpopup.js
│       │   ├── rest/                // Логика и хуки (useCart)
│       │   │   └── useCart.js
│       │   ├── services/
│       │   └── state/
│       │       └── cartStore.js
│       │
│       ├── products/                // Модуль товаров
│       │   ├── components/
│       │   │   ├── AddComment/      // Компонент добавления комментария
│       │   │   │   ├── AddComment.jsx
│       │   │   │   └── index.js
│       │   │   ├── ProductComments/
│       │   │   │   ├── index.js
│       │   │   │   └── ProductComments.jsx
│       │   │   └── ProductInfo/
│       │   │       ├── index.js
│       │   │       └── ProductInfo.jsx
│       │   ├── pages/
│       │   │   └── ProductPage/     // Страница товара
│       │   │       ├── index.js
│       │   │       └── ProductPage.jsx
│       │   ├── rest/
│       │   │   ├── useComments.js
│       │   │   └── useProduct.js
│       │   ├── services/            // API запросы
│       │   │   ├── commentsApi.js
│       │   │   └── productApi.js
│       │   └── state/
│       │       └── currentProduct.js
│       │
│       ├── shops/                   // Модуль магазинов
│       │   └── pages/               
│       │       ├── components/
│       │       │   ├── Map/
│       │       │   │   ├── index.js
│       │       │   │   └── Map.jsx
│       │       │   ├── ShopItem/
│       │       │   │   ├── index.js
│       │       │   │   └── ShopItem.jsx
│       │       │   ├── ShopList/
│       │       │   │   ├── index.js
│       │       │   │   └── ShopList.jsx
│       │       │   └── ShopSearch/
│       │       │       ├── index.js
│       │       │       └── ShopSearch.jsx
│       │       ├── rest/
│       │       │   └── useShops.js
│       │       ├── services/
│       │       │   └── shopsApi.js
│       │       └── ShopsPage/       // Главная страница магазинов
│       │           ├── index.js
│       │           └── ShopsPage.jsx
│       │
│       └── user/                    // Модуль пользователя
│           ├── components/
│           │   ├── LoginPopup/
│           │   └── ProfileMenu/
│           ├── rest/
│           │   └── useUser.js
│           ├── services/
│           └── state/
│               └── userStore.js
```
