'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "@/components/admin/dashboard";
import LocationList from "@/components/admin/location-list";
import AccountList from "@/components/admin/account-list";
import OrderList from "@/components/admin/order-list";
import { useSideBar } from "@/store/useSidebar";

export default function Admin() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "location-list" && <LocationList />}
        {sideBar == "account-list" && <AccountList />}
        {sideBar == "order-list" && <OrderList />}
      </div>
    </section>
  );
}