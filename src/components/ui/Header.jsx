import React from "react";
import NotificationIcon from "../../assets/icons/Notification.png";
import searchIcon from "../../assets/icons/search.png";
import profileIcon from "../../assets/icons/Avatar.png";
import Input from "../ui/Input";
const Header = () => {
  return (
    <div className="w-full md:p-5 p-3 bg-white flex items-center justify-between ">
      <div className="relative">
        <img src={searchIcon} className="w-7 h-7 absolute top-6 left-4" />
        <Input
          placeholder={"Search products, suppliers, orders..."}
          style={
            "rounded-lg border-2 border-[#D0D5DD] pl-12 py-3 px-5 md:w-[400px] w-[360px] mt-3 bg-transparent text-[#48505E] focus:outline-none focus:border-primary-600 transition-colors duration-200"
          }
        />
      </div>
      <div className="md:flex hidden items-center gap-6">
        <img
          src={NotificationIcon}
          alt=""
          className="cursor-pointer
"
        />
        <img src={profileIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
