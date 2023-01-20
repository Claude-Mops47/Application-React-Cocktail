import React from "react";
import { Route, Routes } from "react-router";
import Login from "@/pages/auth/Login";
import Error from "@/_utils/Error";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;
