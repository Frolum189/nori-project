const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUser(id) {
  const result = await fetch(`${USERS_URL}/${id}`);
  if (!result.ok) {
    throw new Error("Юзер не нашелся");
  }
  return result.json();
}

export async function createUser(data) {
  const result = await fetch(USERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!result.ok) {
    throw new Error("Создать чела не удалось");
  }

  return result.json();
}
