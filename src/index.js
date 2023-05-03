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
//react alert
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position="relative">
    <AlertProvider template={AlertTemplate} {...options}>
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
    </AlertProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
