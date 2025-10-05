import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("../pages/landing-page"));
const TopCompanies = lazy(() => import("../pages/about-page"));
const NotFound = lazy(() => import("../pages/not-found"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/top-companies" element={<TopCompanies />} />
      <Route path="/job-tracker" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;