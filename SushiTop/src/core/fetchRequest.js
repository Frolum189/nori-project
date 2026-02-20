export async function fetchRequest(url, method = 'GET', data = null, errorMessage = 'Ошибка запроса') {
    const result = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: data ? JSON.stringify(data) : null
    });

    if (!result.ok) {
        throw new Error(errorMessage);
    }

    if (result.status === 204) {
        return null;
    }

    const contentType = result.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
        return await result.json();
    }

    return null;
}