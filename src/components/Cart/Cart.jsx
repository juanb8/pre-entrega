import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = () => {
  const { cart, deleteItem, checkout, total, clearCart } = useCartContext();
  return (
    <section>
      <h2>Shopping Cart</h2>
      {cart.length ? (
        cart.map((prod) => {
          <Item {...prod}>
            <span>Quantity: {prod.quantity}</span>
            <button
              className="btn"
              onClick={() => {
                deleteItem(prod.id);
              }}
            >
              Delete
            </button>
          </Item>;
        })
      ) : (
        <p>The cart is empty</p>
      )}
      {cart.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>Total: {total()}</p>
          </div>
          <button className="btn" onClick={checkout}>
            Finish purchase
          </button>
          <button className="btn" onClick={clearCart}>
            Empty cart
          </button>
        </div>
      ) : (
        <Link className="btn" to="/">
          Home
        </Link>
      )}
    </section>
  );
};
