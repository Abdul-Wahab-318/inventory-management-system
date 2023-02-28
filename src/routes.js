// import
import React, { Component }  from 'react';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import AffiliateOverview from 'views/adminDashboard/affiliateOverview/AffiliateOverview';
import Dashboard from 'views/adminDashboard/dashboard/Dashboard';
import Finance from 'views/adminDashboard/finance/Finance';

import { default as AffiliateDashboard } from 'views/affiliateDashboard/dashboard/Dashboard'
import { default as AffiliateProfile } from 'views/affiliateDashboard/profile/Profile'
import { default as OrderForm } from 'views/affiliateDashboard/order/Order'
import { default as AffiliateOrderHistory } from 'views/affiliateDashboard/history/History'


export var adminRoutes = [
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

  {
    path: "/dashboard",
    name: "Affiliate Dashboard",
    render : false ,
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Dashboard,
    layout: "/affiliate",
  },

];

export var affiliateRoutes = [

  {
    path: "/profile",
    name: "Profile",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color='inherit' />,
    component: AffiliateProfile,
    layout: "/affiliate",
  } ,

  {
    path: "/dashboard",
    name: "Dashboard",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: AffiliateDashboard,
    layout: "/affiliate",
  },

  {
    path: "/placeOrder",
    name: "Place Order",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color='inherit' />,
    component: OrderForm,
    layout: "/affiliate",
  },

  {
    path: "/orderHistory",
    name: "Order History",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: AffiliateOrderHistory,
    layout: "/affiliate",
  },



];
