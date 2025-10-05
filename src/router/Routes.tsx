import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy imports (Code-Splitting)
const LandingPage = lazy(() => import("../pages/landing-page"));
const TopCompanies = lazy(() => import("../pages/about-page"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/top-companies" element={<TopCompanies />} />
    </Routes>
  );
};

export default AppRoutes;
