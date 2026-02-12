const PRODUCTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getProducts() {
  const result = await fetch(PRODUCTS_URL);
  if (!result.ok) {
    throw new Error("Не удалось загрузить товары");
  }

  return result.json();
}

export async function getProductById(id) {
  const result = await fetch(`${PRODUCTS_URL}/${id}`);
  if (!result.ok) {
    throw new Error("Продукт не найден");
  }

  return result.json();
}

export async function createProduct(data) {
  const result = await fetch(PRODUCTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!result.ok) {
    throw new Error("Создание продукта не удалось");
  }

  return result.json();
}
