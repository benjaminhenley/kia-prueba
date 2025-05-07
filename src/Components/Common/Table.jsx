import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto border">
      <table className="w-full">
        {data.headers && (
          <thead className="bg-[#05141F]">
            <tr>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className={`px-3 text-center sm:px-6 py-3 sm:py-4 uppercase text-white ${
                    data.headers.length > 1 ? `w-[${header.width}]` : "w-full"
                  }`}>
                  <h4 className="font-bold ">{header.label}</h4>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="bg-white divide-y-2 divide-x-2 divide-gray-200">
          {data.details.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#E1E3E4]" : "bg-[#F5F6F6]"}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 text-left sm:px-6 py-3 sm:py-4 text-sm text-[#05141F] border-r">
                  <h6
                    className={`${
                      cellIndex === 0 ? "font-bold" : "font-light"
                    }`}>
                    {cell}
                  </h6>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
