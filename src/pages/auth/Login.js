import "@/components/styles/auth.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { accountService } from "@/_services";
import "@/App.css";
import jwt_decode from "jwt-decode";

const Login = () => {
  // Google auth
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded jwt id token: " + response.credentials);
    var userObject = jwt_decode(response.credentials);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "845489820362-2dveugtjsjes3fba07fd7vfm4vpli2dg.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

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
      <>
        <div id="signInDiv"></div>
        {Object.keys(user).length !== 0 && (
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
        )}
        {user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
          </div>
        )}
      </>
    </div>
  );
};

export default Login;
