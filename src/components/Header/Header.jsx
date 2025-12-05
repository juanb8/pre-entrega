import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";
export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="log-container">
        <img className="logo" src="public/controller-7692999_1280.png" />
      </Link>
      <Nav />
    </header>
  );
};
