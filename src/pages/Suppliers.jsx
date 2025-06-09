import React from "react";
import filterIcon from "../assets/icons/InvenIcons/filter.png";
import {SupplierData,SuppliersColumns } from "../utils/data";
import Table from "../components/ui/Table";
import AddNewProductModal from "../components/ui/AddNewProductModal";
import Button from "../components/ui/Button";
import { useState } from "react";
const Suppliers = () => {
  const [open, setOpen] = useState(false);
  const handleAddProduct = () => {
    setOpen(true);
  };
  const hanldeClose = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="bg-white w-full rounded-lg mt-5 p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#383E49] font-[500] text-[20px]">Suppliers</h1>
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
            columns={SuppliersColumns}
            data={SupplierData}
            title="Suppliers"
            pageSize={7}
            overflow={"h-auto"}
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

export default Suppliers;
