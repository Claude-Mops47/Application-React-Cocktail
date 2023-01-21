import React from "react";
import { Route, Routes } from "react-router";

import { Dashboard, ALayout } from "@/pages/admin";
import { User, UserEdit, UserAdd } from "@/pages/admin/user";
import { Pokemon, PokemonEdit } from "@/pages/admin/pokemon";
import Error from "@/_utils/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="edit/:uid" element={<UserEdit />} />
          <Route path="add" element={<UserAdd />} />
        </Route>
        <Route path="pokemon">
          <Route path="index" element={<Pokemon />} />
          <Route path="edit" element={<PokemonEdit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
