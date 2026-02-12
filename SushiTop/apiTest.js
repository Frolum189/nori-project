import * as ShopsApi from "./src/modules/shops/pages/rest/shopsApi.js";
import * as ProductsApi from "./src/modules/products/rest/productApi.js";
import * as UsersApi from "./src/modules/user/rest/usersApi.js";
import * as CartApi from "./src/modules/cart/rest/cartApi.js";

async function testAll() {
  try {
    console.log("Магазины");
    console.log(await ShopsApi.getShops());
    console.log(await ShopsApi.getShopById(1));
    console.log(await ShopsApi.createShop({ title: "Новый магазин", completed: false }));
    console.log(await ShopsApi.updateShop(1, { title: "Обновлённый магазин" }));
    console.log(await ShopsApi.deleteShop(1));

    console.log("Продукты");
    console.log(await ProductsApi.getProducts());
    console.log(await ProductsApi.getProductById(1));
    console.log(await ProductsApi.createProduct({ title: "Новый продукт", body: "Описание", userId: 1 }));

    console.log("Юз");
    console.log(await UsersApi.getUser(1));
    console.log(await UsersApi.createUser({ name: "Кирилл", username: "Kirusha", email: "kirill@mail.com" }));

    console.log("Корзина");
    console.log(await CartApi.addToCart(101));
    console.log(await CartApi.removeFromCart(1));

  } catch (err) {
    console.error("Ошибка API:", err.message);
  }
}

testAll();
