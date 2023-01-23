import React from "react";
import "@/pages/admin/admin.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        &nbsp;
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        &nbsp;
        <li>
          User
          <ul>
            <li>
              <Link to="/admin/user/index">Liste</Link>
            </li>
            <li>
              <Link to="/admin/user/add">Ajouter</Link>
            </li>
          </ul>
        </li>
        &nbsp;
        <li>
          Pokemon
          <ul>
            <li>
              <Link to="/admin/pokemon/index">Liste</Link>
            </li>
            <li>
              <Link to="/admin/pokemon/add">Ajouter</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
