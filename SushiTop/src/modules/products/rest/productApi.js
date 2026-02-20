import { fetchRequest } from '../../../core/fetchRequest.js';

const PRODUCTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getProducts() {
  return fetchRequest(PRODUCTS_URL, 'GET', null, "Не удалось загрузить товары");
}

export async function getProductById(id) {
  return fetchRequest(`${PRODUCTS_URL}/${id}`, 'GET', null, "Продукт не найден");
}

export async function createProduct(data) {
  return fetchRequest(PRODUCTS_URL, 'POST', data, "Создание продукта не удалось");
}

export async function updateProduct(id, data) {
  return fetchRequest(`${PRODUCTS_URL}/${id}`, 'PUT', data, "Обновление продукта не удалось");
}

export async function deleteProduct(id) {
  return fetchRequest(null, 'DELETE', `${PRODUCTS_URL}/${id}`, "Удаление продукта не удалось");
}