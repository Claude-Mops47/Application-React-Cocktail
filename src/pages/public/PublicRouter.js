import React from "react";
import { Route, Routes } from "react-router";

import { Home, Service, Contact, Layout } from "@/pages/public";

import Error from "@/_utils/Error";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="service/:p_id" element={<Service />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PublicRouter;
