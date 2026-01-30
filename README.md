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
│  └─ shops/
│     ├─ pages/
│     │  └─ ShopsPage/
│     │     ├─ ShopsPage.jsx      // SPA-страница
│     │     └─ index.js
│     │     // импортирует ShopSearch, ShopList, Map
│     │     // получает данные из hooks/useShops.js
│     │
│     ├─ components/
│     │  ├─ ShopSearch/
│     │  │  ├─ ShopSearch.jsx     // Поиск магазина по имени/району
│     │  │  └─ index.js
│     │  │  // использует useShops.js для фильтрации данных
│     │  │
│     │  ├─ ShopList/
│     │  │  ├─ ShopList.jsx       // UI списка магазинов (данные с API)
│     │  │  └─ index.js
│     │  │  // импортирует ShopItem.jsx и useShops.js
│     │  │  // перебирает массив из API и рендерит ShopItem
│     │  │
│     │  ├─ ShopItem/
│     │  │  ├─ ShopItem.jsx       // UI одного магазина
│     │  │  └─ index.js
│     │  │  // принимает props (название, адрес, координаты)
│     │  │
│     │  └─ Map/
│     │     ├─ Map.jsx            // Карта с маркерами
│     │     └─ index.js
│     │     // импортирует shopsStore.js (данные из API)
│     │     // рендерит маркеры на основе координат магазинов
│     │
│     ├─ services/
│     │  └─ shopsApi.js           // REST API запросы к серверу
│     │     // getShops() возвращает массив магазинов с координатами
│     │
│     ├─ hooks/
│     │  └─ useShops.js           // Логика загрузки магазинов
│     │     // использует shopsApi.js
│     │     // сохраняет данные в shopsStore.js
│     │
│     └─ state/                  // состояние заказа (возможно)
│        └─ 
│           
│
└─ public/                        // Статические файлы: карты, иконки, изображения
```
