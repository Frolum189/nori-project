import { fetchRequest } from '../../../core/fetchRequest.js';

const CART_URL = "https://jsonplaceholder.typicode.com/albums";

export async function addToCart(productId) {
  return fetchRequest(CART_URL, 'POST', { productId }, "Добавить корзину не удалось");
}

export async function removeFromCart(cartId) {
  return fetchRequest(`${CART_URL}/${cartId}`, 'DELETE', null, "Удалить из корзины не удалось");
}