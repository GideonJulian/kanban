import React from "react";
import Table from "../components/ui/Table";
import ChartComponent from "../components/ui/Chart";

const Reports = () => {
  const Best_Selling_product = [
    { header: "Products", accessor: "name" },
    { header: "Product ID ", accessor: "productId", render: (val) => `${val}` },
    { header: "Category ", accessor: "category", render: (val) => `${val}` },
    {
      header: "Remaining Quantity ",
      accessor: "remainingQuan",
      render: (val) => `${val} kg`,
    },

    {
      header: "Increase By",
      accessor: "increasedBy",
      render: (val) => (
        <span className="text-success-600 font-medium">{val}</span>
      ),
    },
  ];
  const ReportColumns = [
    { header: "Products", accessor: "name" },
    { header: "Turn Over", accessor: "price", render: (val) => `₹${val}` },
    {
      header: "Increase By",
      accessor: "increasedBy",
      render: (val) => (
        <span className="text-success-600 font-medium">{val}</span>
      ),
    },
  ];
  const tableData = [{ name: "Vegetable", price: 26000, increasedBy: "3.2%" }];
  const Best_Seeling_tableData = [
    {
      name: "Vegetable",
      productId: 23567,
      category: "Vegetable",
      remainingQuan: 225,
      turnOver: 17000,
      increasedBy: "3.2%",
    },
    {
      name: "Onion",
      productId: 23567,
      category: "Vegetable",
      remainingQuan: 200,
      turnOver: 12000,
      increasedBy: "1.3%",
    },
    {
      name: "Maggi",
      productId: 56841,
      category: "Instant Food",
      remainingQuan: 200,
      turnOver: 10000,
      increasedBy: "1.3%",
    },
    {
      name: "Surf Execl ",
      productId: 23567,
      category: "Household",
      remainingQuan: 125,
      turnOver: 10000,
      increasedBy: "1%",
    },
  ];

  return (
    <div className="md:p-4 p-2">
      {/* Top section */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-10 w-full">
        {/* Overview Card */}
        <div className="bg-white w-full  md:w-2/3 rounded-md p-4 flex flex-col">
          <h1 className="text-[#383E49] font-medium text-lg md:text-xl mb-4">
            Overview
          </h1>

          <div className="flex justify-between border-b pb-3 gap-y-5">
            {/* Metrics Top Row */}
            {[
              ["₹21,190", "Total Profit"],
              ["₹18,300", "Revenue", "text-[#DBA362]"],
              ["₹17,432", "Sales", "text-[#845EBC]"],
            ].map(([amount, label, labelColor], index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 w-1/3"
              >
                <h1 className="font-semibold text-[#5D6679] text-base md:text-lg text-center">
                  {amount}
                </h1>
                <p
                  className={`text-[14px] font-normal text-center ${
                    labelColor || "text-[#555555]"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Metrics Bottom Row */}
          <div className="flex flex-wrap justify-between mt-4 gap-y-5">
            {[
              ["₹1,17,432", "Net purchase value"],
              ["₹80,432", "Net sales value"],
              ["₹30,432", "MoM Profit"],
              ["₹1,10,432", "YoY Profit"],
            ].map(([amount, label], index) => (
              <div
                key={index}
                className="flex flex-col gap-1 w-1/2 sm:w-1/2 md:w-auto"
              >
                <h1 className="font-medium text-[#5D6679] text-base md:text-lg">
                  {amount}
                </h1>
                <p className="text-[#667085] text-sm font-normal">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Selling Table */}
        <div className="bg-white w-full md:w-2/3 rounded-md p-4">
          <h1 className="text-[#383E49] font-medium text-lg md:text-xl mb-4">
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

      {/* Chart */}
      <div className="w-full mt-6 bg-white rounded-md p-4">
        <h1 className="text-[#383E49] font-medium text-lg md:text-xl mb-4">
          Profit & Revenue
        </h1>
        <ChartComponent />
      </div>
      <div className="w-full mt-6 bg-white rounded-md p-4">
        <h1 className="text-[#383E49] font-medium text-lg md:text-xl mb-4">
          Best selling product
        </h1>
        <Table
          columns={Best_Selling_product}
          pageSize={3}
          data={Best_Seeling_tableData}
          showPagination={false}
        />
      </div>
    </div>
  );
};

export default Reports;
