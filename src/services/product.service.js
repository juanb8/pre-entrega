const BASE_URL = "https://69319f4d11a8738467cfcc37.mockapi.io/products";
// const BASE_URL = "/data/data.json";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Couldn't create product");
  return await res.json();
};

const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw to allow component-level handling
  }
};

export const fetchProducts = async (category = null) => {
  try {
    let url = BASE_URL;
    if (category) url = `${BASE_URL}?category=${category}`;
    const data = await fetchData(url);
    return data;
  } catch (error) {
    console.error("Product fetch error:", error);
    throw error;
  }
};

export const fetchProductsById = async (id) => {
  try {
    let url = BASE_URL;
    url = `${BASE_URL}?id=${id}`;
    const data = await fetchData(url);
    return data[0];
  } catch (error) {
    console.error("Product fetch error:", error);
    throw error;
  }
};
