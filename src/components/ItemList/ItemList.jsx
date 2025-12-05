import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";
export const ItemList = ({ list }) => {
  return (
    <div className="item-list-container">
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};
