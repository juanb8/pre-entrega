import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const exists = (id) => {
    return cart.some((p) => p.id === id);
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      setCart(
        cart.map((product) => {
          let quant;
          if (product.id === item.id) quant = product.quantity + item.quantity;
          return { ...product, quantity: quant };
        }),
      );
    } else {
      setCart([...cart, item]);
    }
    alert(`${item.name} agregado`);
    //    if (exists(item.id)) {
    //      alert("El producto ya existe en el carrito");
    //      return;
    //    }
    //    setCart([...cart, item]);
    //    alert(`${item.name} agregado`);
  };

  const clearCart = () => {
    setCart([]);
  };
  const getTotalItems = () => {
    return cart.reduce((prev, actual) => prev + actual.quantity, 0);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    alert("Producto eliminado");
  };

  const total = () => {
    const total = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
    return Math.round(total * 100) / 100;
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    deleteItem,
    total,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
