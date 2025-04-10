// Reusable table component
const CookiesTable = ({ data, title, spanish, className = "mt-5" }) => (
  <div className={className}>
    <h4 className="text-[#05141F] font-semibold mb-2">{title}</h4>
    <div className="h-[1px] w-16 bg-[#05141F] mb-3"></div>
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          <col className="w-[196px]" />
          <col className="w-[137px]" />
          <col className="w-[89px]" />
          <col className="w-[90px]" />
          <col className="w-[160px]" />
          <col className="w-[350px]" /> {/* Description column */}
          <col className="w-[150px]" />
        </colgroup>
        <thead>
          <tr className="bg-[#05141F] text-white">
            <th className="py-2 px-4 text-left border-r border-none">
              <h5 className="font-bold">Nombre</h5>
            </th>
            <th className="py-2 px-4 text-left border-r border-none">
              <h5 className="font-bold">{spanish ? "Huésped" : "Host"}</h5>
            </th>
            <th className="py-2 px-4 text-left border-r border-none">
              <h5 className="font-bold">Duración</h5>
            </th>
            <th className="py-2 px-4 text-left border-r border-none">
              <h5 className="font-bold">Tipo de Servicio</h5>
            </th>
            <th className="py-2 px-4 text-left border-r border-none">
              <h5 className="font-bold">Categoría</h5>
            </th>
            <th className="py-2 px-4 text-left border-r border-none">
              <h5 className="font-bold">Descripción</h5>
            </th>
            <th className="py-2 px-4 text-left">
              <h5 className="font-bold">Transferencias internacionales</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((cookie, index) => (
            <tr
              key={index}
              className={`text-[#05141F] ${
                index % 2 === 0 ? "bg-[#E1E3E4]" : "bg-[#F5F6F6]"
              }`}>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6>{cookie.name}</h6>
              </td>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6>{cookie.host}</h6>
              </td>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6>{cookie.duration}</h6>
              </td>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6>{cookie.serviceType}</h6>
              </td>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6>{cookie.category}</h6>
              </td>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6 className="break-words">{cookie.description}</h6>
              </td>
              <td className="py-2 px-4 border border-[#CDD0D2]">
                <h6>{cookie.transfers}</h6>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CookiesTable;
