import React from "react";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[280px] fixed left-0 top-0 h-screen z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-[280px] flex-1 flex flex-col h-screen">
        {/* Fixed Header */}
        <div className="sticky top-0 z-10 bg-white">
          <Header />
        </div>

        <div className="flex-1 overflow-auto md:p-5 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
