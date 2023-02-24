// import
import React, { Component }  from 'react';
import Dashboard from "views/adminDashboard/Dashboard.js";
import Billing from "views/Dashboard/Billing.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import AffiliateOverview from 'views/Pages/AffiliateOverview';
import Finance from 'views/adminDashboard/Finance';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/finance",
    name: "Finances",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Finance,
    layout: "/admin",
  },

  {
    path: "/affiliateOverview",
    name: "Affiliate overview",
    render : false ,
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: AffiliateOverview,
    layout: "/admin",
  },

];
export default dashRoutes;
