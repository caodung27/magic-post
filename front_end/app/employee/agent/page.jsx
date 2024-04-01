'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "@/components/employee/dashboard";
import Sending from "@/components/employee/sending";
import Receiving from "@/components/employee/receiving";
import CreateOrder from "@/components/employee/create-order";
import Record from "@/components/employee/record";

import { useSideBar } from "@/store/useSidebar";

export default function EmployeeAgent() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "sending" && <Sending />}
        {sideBar == "receiving" && <Receiving />}
        {sideBar == "create-order" && <CreateOrder />}
        {sideBar == "record" && <Record />}
      </div>
    </section>
  );
}