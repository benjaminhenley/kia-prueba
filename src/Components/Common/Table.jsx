import React from "react";

const Table = ({ data, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border border-[#CDD0D2] mb-2">
        {data.headers && (
          <thead className="bg-[#05141F]">
            <tr>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  width={header.width ? header.width : "100%"}
                  className={`px-3 text-left sm:px-6 py-3 sm:py-4 text-white ${
                    header.bold ? "font-bold" : ""
                  } border-0 ${
                    index === 0
                      ? "md:relative sticky left-0 z-10 bg-[#05141F] min-w-[140px] md:min-w-auto border-r-2 border-r-[#CDD0D2]"
                      : ""
                  }`}
                  style={{
                    borderBottom: "1px solid #CDD0D2",
                    ...(index === 0
                      ? { boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)" }
                      : {}),
                  }}>
                  <h4 className="font-bold whitespace-nowrap">
                    {header.label}
                  </h4>
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
                  className={`px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F] ${
                    cellIndex === 0
                      ? "md:relative sticky left-0 z-10 min-w-[140px] md:min-w-auto border-r-2 border-r-[#CDD0D2] " +
                        (index % 2 === 0 ? "bg-[#E1E3E4]" : "bg-[#F5F6F6]")
                      : ""
                  }`}
                  style={{
                    ...(cellIndex === 0
                      ? { boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)" }
                      : {}),
                  }}>
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
