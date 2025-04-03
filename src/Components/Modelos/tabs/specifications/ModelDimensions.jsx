import React from "react";

const ModelDimensions = ({ dimensions }) => {
  return (
    <div className="w-full mb-12 mx-auto px-4 md:px-20">
      <h2 className="font-bold bg-gray-950 text-white p-4 text-left">
        {dimensions.title}
      </h2>

      <div className="overflow-x-auto border">
        <table className="w-full divide-y divide-gray-200 table-fixed">
          <tbody className="bg-white divide-y divide-gray-200">
            {dimensions.details.map((detail, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="font-bold px-3 text-center sm:px-6 py-3 sm:py-4 text-sm  sm:text-center text-gray-900 w-[50%] lg:w-[30%] border-r">
                  <h4 className="font-bold">{detail.name}</h4>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-800 text-center w-[50%] lg:w-[70%] font-light">
                  <h4 className="font-regular">{detail.value}</h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelDimensions;
