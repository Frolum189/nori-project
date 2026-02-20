import { fetchRequest } from '../../../../core/fetchRequest.js';

const SHOPS_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getShops() {
  return fetchRequest(SHOPS_URL, 'GET', null, 'Ошибка получения списка магазинов');
}

export async function getShopById(id) {
  return fetchRequest(`${SHOPS_URL}/${id}`, 'GET', null, 'Магазин не найден');
}

export async function createShop(data) {
  return fetchRequest(SHOPS_URL, 'POST', data, 'Создать не удалось');
}

export async function updateShop(id, data) {
  return fetchRequest(`${SHOPS_URL}/${id}`, 'PATCH', data, 'Обновление не удалось');
}

export async function deleteShop(id) {
  return fetchRequest(`${SHOPS_URL}/${id}`, 'DELETE', null, 'Удаление не удалось');
}
