import React, { useState } from "react";
import Button from "../components/ui/Button";
import filterIcon from "../assets/icons/InvenIcons/filter.png";
import { productColumns, productData } from "../utils/data";
import Table from "../components/ui/Table";
import AddNewProductModal from "../components/ui/AddNewProductModal";

const Inventory = () => {
  const [open, setOpen] = useState(false);
  const handleAddProduct = () => {
    setOpen(true);
  };
  const hanldeClose = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="w-full p-5 bg-white rounded-md">
        <div>
          <h1 className="text-[#383E49] font-[500] text-[20px]">
            Overall Inventory
          </h1>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col gap-3 border-r-2 border-[#F0F1F3] pr-20">
            <h1 className="font-[600] text-primary-500 text-[17px] ">
              Categories
            </h1>
            <h1 className="text-[#5D6679] font-[600] text-[16px]">14</h1>
            <h1 className="text-[#858D9D] font-[400] text-[14px]">
              Last 7 days
            </h1>
          </div>
          <div className="flex flex-col gap-3 border-r-2 border-[#F0F1F3] pr-28 pl-10">
            <h1 className="font-[600] text-yellow-500 text-[17px] ">
              Total Products
            </h1>
            <div className="flex justify-between">
              <h1 className="font-[600] text-[#5D6679] text-[18px]">868</h1>
              <h1 className="font-[600] text-[#5D6679] text-[18px]">₹25000</h1>
            </div>                    
            <div className="flex justify-between gap-20">
              <h1 className="text-[#858D9D] font-[400] text-[14px]">
                Last 7 days
              </h1>

              <h1 className="text-[#858D9D] font-[400] text-[14px]">Revenue</h1>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3 border-r-2 border-[#F0F1F3] pr-16 pl-10">
            <h1 className="font-[600] text-purple-500 text-[17px] ">
              Top Selling
            </h1>
            <div className="flex justify-between">
              <h1 className="font-[600] text-[#5D6679] text-[18px]">5</h1>
              <h1 className="font-[600] text-[#5D6679] text-[18px]">₹25000</h1>
            </div>
            <div className="flex justify-between gap-20">
              <h1 className="text-[#858D9D] font-[400] text-[14px]">
                Last 7 days
              </h1>

              <h1 className="text-[#858D9D] font-[400] text-[14px]">Cost</h1>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3 border-r-2 border-[#F0F1F3] pr-16 pl-10">
            <h1 className="font-[600] text-[#F36960] text-[17px] ">
              Low Stocks
            </h1>
            <div className="flex justify-between">
              <h1 className="font-[600] text-[#5D6679] text-[18px]">12</h1>
              <h1 className="font-[600] text-[#5D6679] text-[18px]">2</h1>
            </div>
            <div className="flex justify-between gap-10">
              <h1 className="text-[#858D9D] font-[400] text-[14px]">
                Oredered
              </h1>

              <h1 className="text-[#858D9D] font-[400] text-[14px]">
                Not in Stock
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg mt-5 p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#383E49] font-[500] text-[20px]">Products</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              text={"Add Products"}
              style={`py-3 px-4 bg-[#1366D9] text-white rounded-md`}
              onClick={handleAddProduct}
            />
            <Button
              text={
                <div className="flex items-center gpa-10  justify-between">
                  <img src={filterIcon} />
                  <span>Filters</span>
                </div>
              }
              style={`py-3 px-6 bg-transparent border-2 border-[#D0D5DD]  rounded-md`}
            />{" "}
            <Button
              text={"Download all"}
              style={`py-3 px-4 bg-transparent border-2 border-[#D0D5DD] rounded-md`}
            />
          </div>
        </div>
        <div>
          <Table
            columns={productColumns}
            data={productData}
            title="Products"
            pageSize={7}
            overflow_x_h={"h-[350px]"}
          />
        </div>
        <AddNewProductModal isOpen={open} onClose={() => setOpen(false)}>
          <h2 className="text-[#383E49] font-[500] text-[20px]">New Product</h2>
          <p></p>
          <div className="flex justify-end gap-2">
            <Button
              style={
                "bg-transparent border-2 border-[#F0F1F3] py-2 px-4 rounded-lg  "
              }
              text={"Discard"}
              onClick={hanldeClose}
            />{" "}
            <Button
              style={
                "bg-primary-600 text-white border-2 border-[#F0F1F3] py-2 px-4 rounded-lg  "
              }
              text={"Add Product"}
            />
          </div>
        </AddNewProductModal>
      </div>
    </div>
  );
};

export default Inventory;
