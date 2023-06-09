import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh] bg-slate-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
