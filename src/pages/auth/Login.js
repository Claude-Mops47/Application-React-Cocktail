import "@/components/styles/pages_auth.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { accountService } from "@/_services";
import "@/App.css";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "mopeno",
    password: "winds",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .login(credentials)
      .then((res) => {
        accountService.saveToken(res.data.token);
        navigate("/admin", { replace: true });
        // console.log(res);
        // console.log(res.data.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Login">
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="username">Identifiant</label>
          <input
            type="text"
            name="username"
            value={credentials.username || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Mot de pass</label>
          <input
            type="password"
            name="password"
            value={credentials.password || ""}
            onChange={onChange}
            required
          />
        </div>
        <div className="group">
          <button>Connexion</button>
        </div>
      </form>
      {/* Google sign */}
      <GoogleLogin />
    </div>
  );
};

export default Login;
