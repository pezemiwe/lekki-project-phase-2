import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components/common";
import Navbar from "../components/common/Navbar";
import Props from "../pages/Property";
import { ROUTES } from "./routes";

const AllRoutes = () => (
  <Routes>
    <Route
      element={
        <PublicRoute>
          <Navbar />
        </PublicRoute>
      }
    >
      <Route path={ROUTES.home} element={<Props />} />
    </Route>
  </Routes>
);

const ManageSession = () => {
  return <AllRoutes />;
};
export default function Navigation() {
  return (
    <BrowserRouter>
      <ManageSession />
    </BrowserRouter>
  );
}
