import React from "react";
import { accountService } from "@/_services/account.service.js";
import { Link, useNavigate } from "react-router-dom";

import "@/components/styles/header.css";

const Header = () => {
  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate("/");
  };
  return (
    <div className="header">
      <Link className="logo" to="/">
        CompanyLogo
      </Link>
      <div className="header-right">
        <Link className="active" to="/admin">
          Admin
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
