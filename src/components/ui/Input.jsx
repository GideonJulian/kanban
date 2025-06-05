import React from "react";

const Input = ({ type, placeholder, id, label, style }) => {
  return (
    <div>
      <div>
        <label className="text-[#48505E] text-[14px] font-[500] ">
          {label}
        </label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={style}
      />
    </div>
  );
};                              

export default Input;
