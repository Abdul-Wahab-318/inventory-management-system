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

import { default as AffiliateDashboard } from 'views/affiliateDashboard/dashboard/Dashboard'
import { default as AffiliateProfile } from 'views/affiliateDashboard/profile/Profile'
import { default as OrderForm } from 'views/affiliateDashboard/order/Order'
import { default as AffiliateOrderHistory } from 'views/affiliateDashboard/history/History'
import Profile from 'views/adminDashboard/Profile';
import Dashboard from 'views/adminDashboard/dashboard/Dashboard';
import Inventory from 'views/affiliateDashboard/Inventory';
// export var adminRoutes = []

export var adminRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: AffiliateDashboard,
    layout: "/admin",
  },

  {
    path: "/placeOrder",
    name: "Place Order",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color='inherit' />,
    component: OrderForm,
    layout: "/admin",
  },

  {
    path: "/orderHistory",
    name: "Order History",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: AffiliateOrderHistory,
    layout: "/admin",
  },

  {
    path: "/inventory",
    name: "Inventory",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <SupportIcon color='inherit' />,
    component: Inventory,
    layout: "/admin"
  }



];

export var affiliateRoutes = [
  {
    path: "/profile",
    name: "Profile",
    render : true ,
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color='inherit' />,
    component: Profile,
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
]