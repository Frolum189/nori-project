const SHOPS_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getShops() {
  const result = await fetch(SHOPS_URL);
  if (!result.ok) {
    throw new Error("Ошибка");
  }

  return result.json();
}

export async function getShopById(id) {
  const result = await fetch(`${SHOPS_URL}/${id}`);
  if (!result.ok) {
    throw new Error("Магазин не найден");
  }

  return result.json();
}

export async function createShop(data) {
  const result = await fetch(SHOPS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    throw new Error("Создать не удалось");
  }

  return result.json();
}

export async function updateShop(id, data) {
  const result = await fetch(`${SHOPS_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    throw new Error("Создать не удалось");
  }

  return result.json();
}

export async function deleteShop(id) {
  const result = await fetch(`${SHOPS_URL}/${id}`, {
    method: "DELETE",
  });
  if (!result.ok) {
    throw new Error("Создать не удалось");
  }

  return result.json();
}
