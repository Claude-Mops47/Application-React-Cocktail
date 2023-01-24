import React from "react";
import { accountService } from "@/_services/account.service.js";
import { useNavigate } from "react-router-dom";

import "@/components/styles/header.css";

const Header = () => {
  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate("/");
  };
  return (
    <div className="Header_Admin">
      Header Admin
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Header;
