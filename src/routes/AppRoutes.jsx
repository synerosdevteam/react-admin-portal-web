import React, { Suspense } from "react";
import Loading from "../pages/Loading";

const Dashboard = React.lazy(() => import("../pages/Home"));
const Monitoring = React.lazy(() => import("../pages/Monitoring"));
const Login = React.lazy(() => import("../pages/Login"));

const routes = {
  "/dashboard": Dashboard,
  "/monitoring": Monitoring,
  "/Login": Login,
};

function AppRoutes({ router }) {
  return (
    <Suspense fallback={<Loading />}>
      {routes[router.pathname] ? (
        React.createElement(routes[router.pathname])
      ) : (
        <div style={{ padding: "2rem", color: "red", fontWeight: "bold" }}>
          404 - Page Not Found
        </div>
      )}
    </Suspense>
  );
}

export default AppRoutes;
