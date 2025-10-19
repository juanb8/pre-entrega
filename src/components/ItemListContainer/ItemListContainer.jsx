import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("hubo un problema al buscar produtos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <section>
      <h1>Bienvenida</h1>
    </section>
  );
};
