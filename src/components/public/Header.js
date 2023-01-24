import React from "react";
import { Link } from "react-router-dom";
import "@/components/styles/header.css";

const Header = () => {
  return (
    <header className="Pheader">
      <nav>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          | &nbsp;
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
