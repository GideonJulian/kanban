import React from "react";
import Button from "../components/ui/Button";

const ManageStore = () => {
  const Stores = [
    {
      storeName: '',
      address: ''
    }
  ]
  return (
    <div>
      <div className="bg-white w-full rounded-lg mt-5 p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#383E49] font-[500] text-[20px]">Suppliers</h1>
          </div>
          <Button  text={"Add Store "}
              style={`py-3 px-4 bg-[#1366D9] text-white rounded-md`} />
        </div>
      </div>
    </div>
  );
};

export default ManageStore;
