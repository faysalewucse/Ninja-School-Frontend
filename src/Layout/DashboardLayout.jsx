import React from "react";
import { Sidebar } from "../pages/Dashboard/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const DashboardLayout = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
