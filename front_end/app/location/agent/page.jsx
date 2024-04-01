'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "../../../components/location/agent/dashboard"
import EmployeeListAgent from './../../../components/location/agent/employee-list';
import OrderListAgent from './../../../components/location/agent/order-list';
import OrderListAg from "@/components/location/agent/orderlist";
import { useSideBar } from "@/store/useSidebar";

export default function LocationAgent() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "employee-list" && <EmployeeListAgent />}
        {sideBar == "order-list" && <OrderListAgent />}
        {sideBar == "orderlist" && <OrderListAg />}
      </div>
    </section>
  );
}