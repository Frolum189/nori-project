import * as ShopsApi from "./src/modules/shops/pages/rest/shopsApi.js";
import * as ProductsApi from "./src/modules/products/rest/productApi.js";
import * as UsersApi from "./src/modules/user/rest/usersApi.js";
import * as CartApi from "./src/modules/cart/rest/cartApi.js";

async function testAll() {
  try {
    console.log("=== SHOPS ===");
    const shops = await ShopsApi.getShops();
    console.log(shops);

    const shop = await ShopsApi.getShopById(1);
    console.log("Shop with ID = 1:", shop);

    const newShop = await ShopsApi.createShop({ title: "New shop", completed: false });
    console.log("Shop created:", newShop);

    const updatedShop = await ShopsApi.updateShop(1, { title: "Updated shop" });
    console.log("Shop updated:", updatedShop);

    const deletedShop = await ShopsApi.deleteShop(1);
    console.log("Shop deletion returned:", deletedShop);

    console.log("\n=== PRODUCTS ===");
    const products = await ProductsApi.getProducts();
    console.log(products);

    const product = await ProductsApi.getProductById(1);
    console.log("Product with ID = 1:", product);

    const newProduct = await ProductsApi.createProduct({
      title: "New product",
      body: "Product description",
      userId: 1
    });

    console.log("Product created:", newProduct);

    console.log("\n=== USERS ===");
    const user = await UsersApi.getUser(1);
    console.log("User with ID = 1:", user);

    const newUser = await UsersApi.createUser({
      name: "Kirill",
      username: "Kirusha",
      email: "kirill@mail.com"
    });

    console.log("User created:", newUser);

    console.log("\n=== CART ===");
    const addedToCart = await CartApi.addToCart(101);
    console.log("Added to cart:", addedToCart);

    const removedFromCart = await CartApi.removeFromCart(1);
    console.log("Removed from cart:", removedFromCart);

  } catch (err) {
    console.log("API error:", err.message);
  }
}

testAll();