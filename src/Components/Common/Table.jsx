import React from "react";

const Table = ({ data }) => {
  console.log(data);
  return (
    <div className="overflow-x-auto ">
      <table className="w-full">
        {data.headers && (
          <thead className="bg-[#05141F]">
            <tr>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  width={header.width ? header.width : "100%"}
                  className={`px-3 text-left sm:px-6 py-3 sm:py-4  text-white ${
                    header.bold ? "font-bold" : ""
                  }`}>
                  <h4 className="font-bold">{header.label}</h4>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="bg-white divide-y divide-x divide-[#CDD0D2]">
          {data.details.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#E1E3E4]" : "bg-[#F5F6F6]"}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 text-left sm:px-6 py-3 sm:py-4 text-sm text-[#05141F] border-r">
                  <h6
                    className={
                      data.headers[cellIndex]?.bold ? "font-bold" : "font-light"
                    }>
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
