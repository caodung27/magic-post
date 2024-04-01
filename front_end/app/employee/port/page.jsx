'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "../../../components/employee/dashboard"
import Sending from "../../../components/employee/sending";
import Reciving from "../../../components/employee/receiving";
import CreateOrder from "../../../components/employee/create-order"
import { useSideBar } from "@/store/useSidebar";

export default function EmployeePort() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "sending" && <Sending />}
        {sideBar == "receiving" && <Reciving />}
        {sideBar == "create-order" && <CreateOrder />}
      </div>
    </section>
  );
}