import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { userService } from "@/_services/user.service";

const User = () => {
  let navigate = useNavigate();

  useEffect(() => {
    userService
      .getAllUsers()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cls = (userId) => {
    console.log("Click");
    navigate("../edit/" + userId);
  };
  return (
    <div className="User">
      User Liste
      <button onClick={() => cls(3)}>User 2</button>
    </div>
  );
};

export default User;
