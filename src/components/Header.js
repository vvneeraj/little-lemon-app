import Nav from "./Nav";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="gutter">
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
