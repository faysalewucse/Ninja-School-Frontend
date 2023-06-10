import React from "react";
import { Sidebar } from "../pages/Dashboard/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="lg:flex hidden">
      <Sidebar />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
