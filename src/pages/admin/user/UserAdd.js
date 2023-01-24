import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "@/_services";

const UserAdd = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // Handle modification dans le formulaire
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    userService
      .addUser(user)
      .then((res) => {
        console.log(res.data);
        navigate("../index");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="user_add">
      UserAdd
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            value={user.username || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Name</label>
          <input
            type="password"
            name="password"
            value={user.password || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default UserAdd;
