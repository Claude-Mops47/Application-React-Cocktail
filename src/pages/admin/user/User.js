import React, { useEffect, useRef, useState } from "react";
import { userService } from "@/_services";
import { Link } from "react-router-dom";

const User = () => {
  const flag = useRef(false);
  const [users, setUsers] = useState([]);

  // UseEffect
  useEffect(() => {
    if (flag.current === false) {
      userService
        .getAllUsers()
        .then((res) => {
          setUsers(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  const delUser = (uId) => {
    userService
      .deleteUser(uId)
      .then((res) => {
        setUsers((current) => {
          // current.filter((user) => user.id !== uId);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="User">
      User List
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Id</th>
            <th>Name</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <span onClick={() => delUser(user.id)}>X</span>
              </td>
              <td>
                <Link to={`../edit/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.username}</td>
              <td>{Date(user.createdAt)}</td>
              <td>{Date(user.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
