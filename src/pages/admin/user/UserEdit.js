import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { userService } from "@/_services";

const UserEdit = () => {
  const [user, setUser] = useState([]);
  const flag = useRef(false);
  const navigate = useNavigate();

  let { uid } = useParams();

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
    // console.log(user);
    userService
      .updateUser(user)
      .then(navigate("../index"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (flag.current === false) {
      userService
        .getUser(uid)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user_edit">
      UserEdit
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={user.username || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <button>Modifier</button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
