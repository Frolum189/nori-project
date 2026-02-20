import * as ShopsApi from "./src/modules/shops/pages/rest/shopsApi.js";
import * as ProductsApi from "./src/modules/products/rest/productApi.js";
import * as UsersApi from "./src/modules/user/rest/usersApi.js";
import * as CartApi from "./src/modules/cart/rest/cartApi.js";

async function testAll() {
  try {
    console.log("=== МАГАЗИНЫ ===");
    const shops = await ShopsApi.getShops();
    console.log(shops);

    const shop = await ShopsApi.getShopById(1);
    console.log("Магазин с ID = 1:", shop);

    const newShop = await ShopsApi.createShop({ title: "Новый магазин", completed: false });
    console.log("Создан магазин:", newShop);

    const updatedShop = await ShopsApi.updateShop(1, { title: "Обновлённый магазин" });
    console.log("Обновлён магазин:", updatedShop);

    const deletedShop = await ShopsApi.deleteShop(1);
    console.log("Удаление магазина вернуло:", deletedShop);

    console.log("\n=== ПРОДУКТЫ ===");
    const products = await ProductsApi.getProducts();
    console.log(products);

    const product = await ProductsApi.getProductById(1);
    console.log("Продукт с ID = 1:", product);

    const newProduct = await ProductsApi.createProduct({
      title: "Новый продукт",
      body: "Описание продукта",
      userId: 1
    });
    
    console.log("Создан продукт:", newProduct);

    console.log("\n=== ЮЗЕРЫ ===");
    const user = await UsersApi.getUser(1);
    console.log("Юзер с ID=1:", user);

    const newUser = await UsersApi.createUser({
      name: "Кирилл",
      username: "Kirusha",
      email: "kirill@mail.com"
    });

    console.log("Создан юзер:", newUser);

    console.log("\n=== КОРЗИНА ===");
    const addedToCart = await CartApi.addToCart(101);
    console.log("Добавлено в корзину:", addedToCart);

    const removedFromCart = await CartApi.removeFromCart(1);
    console.log("Удалено из корзины:", removedFromCart);

  } catch (err) {
    console.error("Ошибка API:", err.message);
  }
}

testAll();