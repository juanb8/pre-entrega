import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";
export const Nav = () => {
  const { getTotalItems } = useCartContext();
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/category/shooter"}>shooter</Link>
        </li>
        <li>
          <Link to={"/category/sports"}>sports</Link>
        </li>
        <li>
          <Link to={"/category/RPG"}>rpg</Link>
        </li>
        <li>
          <Link to={"/category/Action"}>action</Link>
        </li>
        <li>
          <Link to={"/category/strategy"}>strategy</Link>
        </li>
        <li>
          <Link to={"/category/adventure"}>adventure</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
