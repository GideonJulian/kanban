import React from "react";
import Button from "../components/ui/Button";
import filterIcon from "../assets/icons/InvenIcons/filter.png";
import { OrdersColumns, OrdersData } from "../utils/data";
import Table from "../components/ui/Table";
import AddNewProductModal from "../components/ui/AddNewProductModal";
import { useState } from "react";
import Input from "../components/ui/Input";
const Orders = () => {
  const [open, setOpen] = useState(false);
  const handleAddProduct = () => {
    setOpen(true);
  };
  const hanldeClose = () => {
    setOpen(!open);
  };
  const inputFields = [
    {
      label: "Product Name",
      placeholder: "Enter product name",
    },
    {
      label: "Product ID",
      placeholder: "Enter Product ID",
    },
    {
      label: "Order valiue",
      placeholder: "Enter Order valiue",
    }, {
      label: "Quantity",
      placeholder: "Enter Order Quantity",
    }, {
      label: "Unit",
      placeholder: "Enter Product  Unit",
    }, {
      label: "Buying",
      placeholder: "Enter Product  Buying",
    }, {
      label: "Date of delivery",
      placeholder: "Enter Product  Date of delivery",
    },
  ];

  return (
    <div>
      <div className="w-full p-5 bg-white rounded-md">
        <div>
          <h1 className="text-[#383E49] font-[500] text-[20px]">
            Overall Orders
          </h1>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col gap-3 border-r-2 border-[#F0F1F3] pr-20">
            <h1 className="font-[600] text-primary-500 text-[17px] ">
              Total Orders
            </h1>
            <h1 className="text-[#5D6679] font-[600] text-[16px]">37</h1>
            <h1 className="text-[#858D9D] font-[400] text-[14px]">
              Last 7 days
            </h1>
          </div>
          <div className="flex flex-col gap-3 border-r-2 border-[#F0F1F3] pr-28 pl-10">
            <h1 className="font-[600] text-yellow-500 text-[17px] ">
              Total Received
            </h1>
            <div className="flex justify-between">
              <h1 className="font-[600] text-[#5D6679] text-[18px]">32</h1>
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
              Total Returned
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
          <div className="flex flex-col gap-3 border-[#F0F1F3] pr-16 pl-10">
            <h1 className="font-[600] text-[#F36960] text-[17px] ">
              On the way
            </h1>
            <div className="flex justify-between">
              <h1 className="font-[600] text-[#5D6679] text-[18px]">12</h1>
              <h1 className="font-[600] text-[#5D6679] text-[18px]">₹2356</h1>
            </div>
            <div className="flex justify-between gap-10">
              <h1 className="text-[#858D9D] font-[400] text-[14px]">
                Oredered
              </h1>

              <h1 className="text-[#858D9D] font-[400] text-[14px]">Cost</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg mt-5 p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#383E49] font-[500] text-[20px]">Orders</h1>
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
            columns={OrdersColumns}
            data={OrdersData}
            title="Products"
            pageSize={7}
            overflow={"h-[350px]"}
          />
        </div>
        <AddNewProductModal isOpen={open} onClose={() => setOpen(false)}>
          <h2 className="text-[#383E49] font-[500] text-[20px]">New Order </h2>
          <div className="flex  flex-col mt-4 mb-3 w-full">
           
            {inputFields.map((field, index) => (
              <div
                key={index}
                className="flex items-center justify-between mt-4 mb-3"
              >
                <h1>{field.label}</h1>
                <Input
                  placeholder={field.placeholder}
                  style="py-2 px-3 border w-[273px] rounded-md"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <p className="text-[#858D9D] font-[400] text-[16px]">  Notify on the date of delivery</p>
          </div>
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
              text={"Add Order"}
            />
          </div>
        </AddNewProductModal>
      </div>
    </div>
  );
};

export default Orders;
