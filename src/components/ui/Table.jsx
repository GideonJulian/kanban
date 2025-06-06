// components/Table.jsx
import React from "react";

const getStatusColor = (status) => {
  const statusLower = status.toLowerCase();
  if (statusLower.includes("in-stock")) return "text-green-600";
  if (statusLower.includes("out of stock")) return "text-red-500";
  if (statusLower.includes("low stock")) return "text-yellow-600";
  return "text-gray-500";
};

const Table = ({ columns, data, title = "Table" }) => {
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
                      col.accessor === "status" ? getStatusColor(row[col.accessor]) : ""
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
    </div>
  );
};

export default Table;
