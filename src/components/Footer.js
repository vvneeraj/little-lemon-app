import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gutter">
        <article>
          <img src={require("../images/footer-logo.png")} alt="Little Lemon Logo" />
        </article>
        <article>
          <ul>
            <li>Navigation</li>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </article>
        <article>
          <ul>
            <li>Contact</li>
            <li>Chicago st.</li>
            <li>+3487465243</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </article>
        <article>
          <ul>
            <li>Social</li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </article>
    </footer>
  );
};

export default Footer;
