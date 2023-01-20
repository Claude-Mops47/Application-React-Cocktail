import React from "react";
import { Route, Routes } from "react-router";

import { Dashboard, ALayout } from "@/pages/admin";
import { User, UserEdit, UserAdd } from "@/pages/admin/user";
import { Cocktail, CocktailEdit } from "@/pages/admin/cocktail";
import Error from "@/_utils/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="edit/:uid" element={<UserEdit />} />
          <Route path="add" element={<UserAdd />} />
        </Route>
        <Route path="cocktail">
          <Route path="index" element={<Cocktail />} />
          <Route path="edit" element={<CocktailEdit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
