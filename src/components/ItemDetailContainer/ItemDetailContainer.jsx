import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un porblema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((prod) => String(prod.id) === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando ...</p>
      )}
    </main>
  );
};
