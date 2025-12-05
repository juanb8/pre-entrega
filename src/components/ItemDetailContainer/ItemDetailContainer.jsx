import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";
import { fetchProductsById } from "../../services/product.service";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProductsById(id)
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <main className="detail-container">
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando ...</p>
      )}
    </main>
  );
};
