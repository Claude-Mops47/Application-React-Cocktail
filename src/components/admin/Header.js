import React from "react";
import "@/pages/admin/admin.css";
import { accountService } from "@/_services/account.service.js";
import { useNavigate } from "react-router-dom";

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
