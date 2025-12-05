import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/product.service";

import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const filteredData = await fetchProducts(category);
        setProducts(filteredData);
      } catch (error) {
        console.error("Error in component:", error);
      }
    };
    loadProducts();
  }, [category]);
  return (
    <section className="container">
      <h1>{titulo}</h1>
      <ItemList list={products} />
    </section>
  );
};
