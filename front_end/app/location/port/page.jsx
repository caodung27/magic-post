'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "../../../components/location/port/dashboard"
import EmployeeListPort from './../../../components/location/port/employee-list';
import OrderListPort from './../../../components/location/port/order-list';
import { useSideBar } from "@/store/useSidebar";

export default function LocationPort() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "employee-list" && <EmployeeListPort />}
        {sideBar == "order-list" && <OrderListPort />}
      </div>
    </section>
  );
}