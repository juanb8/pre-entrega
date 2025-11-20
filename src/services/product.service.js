const BASE_URL = "";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product)
  });
  if (!res.ok)
    throw new Error("Couldn't create product");
  return await res.json();
}
