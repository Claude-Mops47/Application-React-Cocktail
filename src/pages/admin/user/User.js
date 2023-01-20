import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  let navigate = useNavigate();
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
