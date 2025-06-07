import React, { useState } from "react";
import PaginationControll from "./PaginationControll";

const getStatusColor = (status) => {
  const statusLower = status.toLowerCase();
  if (statusLower.includes("in-stock")) return "text-green-600";
  if (statusLower.includes("out of stock")) return "text-red-500";
  if (statusLower.includes("low stock")) return "text-yellow-600";
  return "text-gray-500";
};

const Table = ({
  columns,
  data,
  title = "Table",
  pageSize = 7,
  showPagination = true,
  overflow
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const startIdx = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIdx, startIdx + pageSize);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-semibold mb-4">{title}</h2> */}
      <div className={`overflow-x-auto ${overflow}`}>
        <table className="w-full  table-auto text-left">
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
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className={`px-4 py-3 whitespace-nowrap ${
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

      {/* Pagination Controls */}
      {showPagination && (
        <PaginationControll
          totalPages={totalPages}
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Table;
