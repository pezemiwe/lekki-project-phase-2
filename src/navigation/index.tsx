import PropertyDetailsPage from "pages/Details";
import Form from "pages/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components/common";
import Layout from "../components/common/Layout";
import Props from "../pages/Property";
import { ROUTES } from "./routes";

const AllRoutes = () => (
  <Routes>
    <Route
      element={
        <PublicRoute>
          <Layout />
        </PublicRoute>
      }
    >
      <Route path={ROUTES.home} element={<Props />} />
      <Route path={ROUTES.details} element={<PropertyDetailsPage />} />
      <Route path={ROUTES.form} element={<Form />} />
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
