import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import AffiliateLayout from "layouts/Affiliate.js"
import RTLLayout from "layouts/RTL.js"; // Chakra imports
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css"
// Custom Chakra theme
import theme from "theme/theme.js";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position="relative">
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/affiliate`} component={AffiliateLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Redirect from={`/`} to="/auth/login"  /> 
        {/* <Redirect from={`/`} to="/admin/dashboard" /> */}
        {/* <Redirect from={`/`} to="/affiliate/dashboard" /> */}
      </Switch>
    </HashRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
