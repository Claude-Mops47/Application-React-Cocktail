import React from "react";
import { Link } from "react-router-dom";
import "@/components/styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        CompanyLogo
      </Link>
      <div className="header-right">
        <Link className="active" to="/home">
          Home
        </Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">About</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default Header;
