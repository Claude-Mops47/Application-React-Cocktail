import React from "react";
import { useParams } from "react-router";

const UserEdit = () => {
  let { uid } = useParams();
  console.log(uid);

  return <div className="UserEdit">UserEdit</div>;
};

export default UserEdit;
