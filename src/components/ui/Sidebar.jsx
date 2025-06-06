import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import dashboardIcon from "../../assets/icons/Sidebar/houseIcon.png";
import inventoryIcon from "../../assets/icons/Sidebar/inventory.png";
import reportIcon from "../../assets/icons/Sidebar/Report.png";
import suppliersIcon from "../../assets/icons/Sidebar/Suppliers.png";
import orderIcon from "../../assets/icons/Sidebar/orders.png";
import manageIcon from "../../assets/icons/Sidebar/manage.png";
import logoutIcon from "../../assets/icons/Sidebar/LogOut.png";
import settingIcon from "../../assets/icons/Sidebar/Settings.png";
import Button from "./Button";
const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon, path: "/dashboard" },
    { name: "Inventory", icon: inventoryIcon, path: "/dashboard/inventory" },
    { name: "Reports", icon: reportIcon, path: "/dashboard/reports" },
    { name: "Suppliers", icon: suppliersIcon, path: "/dashboard/suppliers" },
    { name: "Orders", icon: orderIcon, path: "/dashboard/orders" },
    { name: "Manage Store", icon: manageIcon, path: "/dashboard/manage-store" },
  ];

  return (
    <div className="h-screen p-7 bg-white w-[280px]">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <img src={logo} alt="" className="w-[48px]" />
          <h1 className="text-primary-600 font-[600] text-[20px]">KANBAN</h1>
        </div>

        <div className="mt-4 flex flex-col space-y-8 px-4">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-6 text-[17px]  py-3 px-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-primary-100 text-primary-500 "
                    : "text-[#5D6679] hover:bg-gray-100"
                }`
              }
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              <span className="font-[500] text-[16px]  ">{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="absolute bottom-0 p-7">
          <Button
            text={
              <div className="flex items-center gap-3">
                <img src={logoutIcon} className="w-6 h-6" />
                <span className="text-[16px] font-[500] text-[#5D6679]">
                  Logout
                </span>
              </div>
            }
            style={` `}
          />
          <Button
            text={
              <div className="flex items-center gap-3">
                <img src={settingIcon} className="w-6 h-6" />
                <span className="text-[16px] font-[500] text-[#5D6679]">
                  Settings
                </span>
              </div>
            }
            style={`mt-8 `}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
