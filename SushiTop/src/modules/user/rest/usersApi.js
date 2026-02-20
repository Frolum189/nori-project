import { fetchRequest } from '../../../core/fetchRequest.js';

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUser(id) {
  return fetchRequest(`${USERS_URL}/${id}`, 'GET', null, "Юзер не нашелся");
}

export async function createUser(data) {
  return fetchRequest(USERS_URL, 'POST', data, "Создать чела не удалось");
}
