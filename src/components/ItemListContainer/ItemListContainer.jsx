import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("hubo un problema al buscar produtos");
        }
        return res.json();
      })
      .then((data) => {
        const filteredData = category
          ? data.filter((prod) => {
              return prod.category === category;
            })
          : data;
        setProducts(filteredData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);
  return (
    <section>
      <h1>Bienvenida</h1>
      <ItemList list={products} />
    </section>
  );
};
