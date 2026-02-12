const CART_URL = "https://jsonplaceholder.typicode.com/albums";

export async function addToCart(productId) {
  const res = await fetch(CART_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  if (!res.ok) throw new Error("Добавить корзину не удалось");
  return res.json();
}

export async function removeFromCart(cartId) {
  const res = await fetch(`${CART_URL}/${cartId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Удалить из корзины не удалось");
  return res.json();
}
