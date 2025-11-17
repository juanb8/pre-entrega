import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Link } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
