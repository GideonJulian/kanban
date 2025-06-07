import React from "react";
import Table from "../components/ui/Table";

const Reports = () => {
  const ReportColumns = [
    { header: "Products", accessor: "name" },
    { header: "Turn Over", accessor: "price", render: (val) => `₹${val}` },
    {
      header: "Increase By",
      accessor: "increasedBy",
      render: (val) => (
        <span className="text-success-600 font-medium">{val}</span>
      ), // green style
    },
  ];

  const tableData = [
    { name: "Vegetable", price: "26,000", increasedBy: "3.2%" },
    { name: "Fruits", price: "18,000", increasedBy: "2.4%" },
    { name: "Grains", price: "34,500", increasedBy: "5.1%" },
    { name: "Beverages", price: "22,700", increasedBy: "1.9%" },
  ];
  return (
    <div>
      <div className="flex  w-full gap-10">
        <div className="bg-white w-2/3 rounded-md p-4 flex flex-col  ">
          <div>
            <h1 className="text-[#383E49] font-[500] text-[20px]">Overview</h1>
          </div>
          <div className="flex  justify-between mt-5 border-b pb-3 w-full">
            <div className="flex flex-col items-center gap-5">
              <h1 className="font-[600] text-[#5D6679] text-[18px] text-center ">
                ₹21,190
              </h1>
              <p className="text-[#555555] font-[400] text-[14px] text-center">
                Total Profit
              </p>
            </div>{" "}
            <div className="flex flex-col items-center gap-5">
              <h1 className="font-[600] text-[#5D6679] text-[18px]  ">
                ₹18,300
              </h1>
              <p className="text-[#DBA362] font-[400] text-[14px]">Revenue</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-5">
              <h1 className="font-[600] text-[#5D6679] text-[18px] text-center ">
                ₹17,432
              </h1>
              <p className="text-[#845EBC] font-[400] text-[14px]">Sales</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-[500] text-[#5D6679] text-[18px] ">
                ₹1,17,432
              </h1>
              <p className="text-[#667085] font-[400] text-[16px] ">
                Net purchase value
              </p>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <h1 className="font-[500] text-[#5D6679] text-[18px] ">
                ₹80,432
              </h1>
              <p className="text-[#667085] font-[400] text-[16px] ">
                Net sales value
              </p>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <h1 className="font-[500] text-[#5D6679] text-[18px] ">
                ₹30,432
              </h1>
              <p className="text-[#667085] font-[400] text-[16px] ">
                MoM Profit
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-[500] text-[#5D6679] text-[18px] ">
                ₹1,10,432
              </h1>
              <p className="text-[#667085] font-[400] text-[16px] ">
                YoY Profit
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-2/3 rounded-md p-4 ">
          <h1 className="text-[#383E49] font-[500] text-[20px]">
            Best selling category
          </h1>
          <Table
            columns={ReportColumns}
            pageSize={3}
            data={tableData}
            showPagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
