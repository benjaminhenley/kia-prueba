import React from "react";

const Table = ({ data, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border border-[#CDD0D2]">
        {data.headers && (
          <thead className="bg-[#05141F]">
            <tr>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  width={header.width ? header.width : "100%"}
                  className={`px-3 text-left sm:px-6 py-3 sm:py-4 text-white ${
                    header.bold ? "font-bold" : ""
                  } border-0`}
                  style={{ borderBottom: "1px solid #CDD0D2" }}>
                  <h4 className="font-bold">{header.label}</h4>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.details.map((row, index) => (
            <tr
              key={index}
              className={
                "h-[54px] " +
                (index % 2 === 0 ? "bg-[#E1E3E4]" : "bg-[#F5F6F6]")
              }>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F]">
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
