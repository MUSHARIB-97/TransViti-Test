import React, { Suspense } from "react";
import AppRoutes from "./router/Routes";
import Loader from "./components/Loader";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppRoutes />
    </Suspense>
  );
};

export default App;
