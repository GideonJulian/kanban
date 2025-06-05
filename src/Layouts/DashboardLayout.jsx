import React from "react";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
const DashboardLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div> 
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
