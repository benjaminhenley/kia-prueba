// Reusable table component
const CookiesTable = ({ data, title }) => (
  <div className="mt-4">
    <h3 className="text-gray-900 font-semibold border-b pb-2 mb-4">{title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="py-2 px-4 text-left border-r border-gray-700">
              Host
            </th>
            <th className="py-2 px-4 text-left border-r border-gray-700">
              Nombre
            </th>
            <th className="py-2 px-4 text-left border-r border-gray-700">
              Duración
            </th>
            <th className="py-2 px-4 text-left border-r border-gray-700">
              Tipo de Servicio
            </th>
            <th className="py-2 px-4 text-left border-r border-gray-700">
              Categoría
            </th>
            <th className="py-2 px-4 text-left border-r border-gray-700">
              Descripción
            </th>
            <th className="py-2 px-4 text-left">
              Transferencias internacionales
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((cookie, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
              <td className="py-2 px-4 border border-gray-300">
                <h6>{cookie.host}</h6>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <h6>{cookie.name}</h6>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <h6>{cookie.duration}</h6>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <h6>{cookie.serviceType}</h6>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <h6>{cookie.category}</h6>
              </td>
              <td className="py-2 px-4 border border-gray-300 max-w-md">
                <h6>{cookie.description}</h6>
              </td>
              <td className="py-2 px-4 border border-gray-300">
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
