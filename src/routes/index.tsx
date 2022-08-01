import React from "react";
import * as reactRouterDom from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repo from "./../pages/Repo/index";

function Routes() {
  return (
    <reactRouterDom.Routes>
      <reactRouterDom.Route element={<Dashboard />} path="/" />
      <reactRouterDom.Route element={<Repo />} path="/repositories" />
    </reactRouterDom.Routes>
  );
}

export default Routes;
