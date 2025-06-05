import React from "react";

const Input = ({ type, placeholder, id, label }) => {
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
        className="rounded-lg border-2 border-[#D0D5DD] py-3 px-5 w-[360px] mt-3"
      />
    </div>
  );
};

export default Input;
