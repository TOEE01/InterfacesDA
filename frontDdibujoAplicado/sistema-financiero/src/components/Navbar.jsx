// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../style/branding.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">💳 Finanzas</div>
    <ul className="nav-links">
      <li><Link to="/credit-cards">Tarjetas de Crédito</Link></li>
      <li><Link to="/debit-cards">Tarjetas de Débito</Link></li>
      <li><Link to="/payment-platforms">Plataformas de Pago</Link></li>
      <li><Link to="/phone-bills">Teléfono</Link></li>
      <li><Link to="/electricity-bills">Luz</Link></li>
      <li><Link to="/water-bills">Agua</Link></li>
      <li><Link to="/stock-market">Bolsa</Link></li>
    </ul>
  </nav>
);

export default Navbar;
