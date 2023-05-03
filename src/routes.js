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

export var adminRoutes = []

export var affiliateRoutes = [



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
