import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";
// import logo from "public/controller-7692999_1280";
export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="log-container">
        <h2 className="logo">LOGO </h2>
      </Link>
      <Nav />
    </header>
  );
};
