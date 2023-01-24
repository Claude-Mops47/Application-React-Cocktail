import React from "react";
import "@/components/styles/header.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="sidenav">
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/user/index">List User</Link>
      <Link to="/admin/user/add">Add User</Link>
      <Link to="/admin/pokemon/index">List Pokemon</Link>
      <Link to="/admin/pokemon/add">Add Pokemon</Link>
    </div>
  );
};

export default SideMenu;
