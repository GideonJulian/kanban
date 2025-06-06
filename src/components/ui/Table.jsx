// components/Table.jsx
import React, { useState } from "react";
import Button from "./Button";

const getStatusColor = (status) => {
  const statusLower = status.toLowerCase();
  if (statusLower.includes("in-stock")) return "text-green-600";
  if (statusLower.includes("out of stock")) return "text-red-500";
  if (statusLower.includes("low stock")) return "text-yellow-600";
  return "text-gray-500";
};
const [currentPage, setCurrentPage] = useState(1);
const totalPage = Math.ceil(data.length / pageSize);

const startIdx = (currentPage - 1) * pageSize;
const currentData = data.slice(startIdx, startIdx + pageSize);

const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
const handleNext = () =>
  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
const Table = ({ columns, data, title = "Table", pageSize = 5 }) => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto h-[350px]">
        <table className="w-full table-auto  text-left">
          <thead className="">
            <tr>
              {columns.map((col) => (
                <th key={col.accessor} className="px-4 py-2 whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className={`px-4 py-2 whitespace-nowrap ${
                      col.accessor === "status"
                        ? getStatusColor(row[col.accessor])
                        : ""
                    }`}
                  >
                    {typeof col.render === "function"
                      ? col.render(row[col.accessor], row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* PAGINATION CONTROLL  */}
      <div className="flex items-center justify-between mt-4">
        <Button
          style={"px-3 py-1 border rounded disabled:opacity-50"}
          onClick={handlePrev}
          text={'Prev'}
        />
         <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPage}
        </span>
           <Button
          style={"px-3 py-1 border rounded disabled:opacity-50"}
          onClick={handleNext}
          text={'Next'}
        />
      </div>
    </div>
  );
};

export default Table;
