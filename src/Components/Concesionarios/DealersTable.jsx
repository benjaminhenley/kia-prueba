
export default function DealersTable({ dealers = [], showResultsCount = true }) {
  
  // Asegurarse de que dealers sea un array y filtrar según el término de búsqueda
  const safeDealers = Array.isArray(dealers) ? dealers : [];
  const filteredDealers = safeDealers.filter(dealer => 
    dealer?.nombre?.toLowerCase() ||
    dealer?.direccion?.toLowerCase()
  );

  return (
    <div className="w-full mx-auto mt-4 md:mt-16">
      {/* Table for desktop - unchanged */}
      <div className="hidden md:block overflow-hidden border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-midnight-black text-white">
              <th className="p-4 text-left text-lg font-semibold">Nombre</th>
              <th className="p-4 text-left text-lg font-semibold">Dirección</th>
              <th className="p-4 text-left text-lg font-semibold">Telefono</th>
              <th className="p-4 text-left text-lg font-semibold">Horario de atención</th>
            </tr>
          </thead>
          <tbody className="border-[#CDD0D2]">
            {filteredDealers.map((dealer, index) => (
              <tr 
                key={dealer.id || index} 
                className={`${index % 2 === 0 ? 'bg-[#CDD0D299]' : 'bg-[#CDD0D233]'} transition-colors`}
                >
                <td className="p-4 text-lg border-t border-r border-[#CDD0D2] font-medium">{dealer.nombre || dealer.name || ''}</td>
                <td className="p-4 text-lg border-t border-r border-[#CDD0D2]">{dealer.direccion || dealer.address || ''}</td>
                <td className="p-4 text-lg border-t border-r border-[#CDD0D2]">{dealer.telefono || dealer.telephone || ''}</td>
                <td className="p-4 text-lg border-t border-[#CDD0D2]">{dealer.horario || dealer.hours || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile table with horizontal scroll */}
      <div className="md:hidden border border-[#CDD0D2] overflow-x-auto">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-midnight-black text-white">
              <th className="p-3 text-left font-semibold text-base w-36 sticky left-0 z-10 bg-midnight-black">Nombre</th>
              <th className="p-3 text-left font-semibold text-base w-48 whitespace-nowrap bg-midnight-black">Dirección</th>
              <th className="p-3 text-left font-semibold text-base w-36 whitespace-nowrap bg-midnight-black">Telefono</th>
              <th className="p-3 text-left font-semibold text-base w-48 whitespace-nowrap bg-midnight-black">Horario de atención</th>
            </tr>
          </thead>
          <tbody>
            {filteredDealers.map((dealer, index) => (
              <tr 
                key={`row-${dealer.id || index}`}
                className={`${index % 2 === 0 ? 'bg-[#E0E2E3]' : 'bg-[#F4F4F4]'} transition-colors`}
              >
                <td className="p-2 text-sm border-t border-r border-[#CDD0D2] font-medium sticky left-0 z-10" style={{backgroundColor: index % 2 === 0 ? '#E0E2E3' : '#F4F4F4'}}>
                  {dealer.nombre || dealer.name || ''}
                </td>
                <td className="p-2 text-sm border-t border-r border-[#CDD0D2] w-48">
                  {dealer.direccion || dealer.address || ''}
                </td>
                <td className="p-2 text-sm border-t border-r border-[#CDD0D2] w-36">
                  {dealer.telefono || dealer.telephone || ''}
                </td>
                <td className="p-2 text-sm border-t border-[#CDD0D2] w-48">
                  {dealer.horario || dealer.hours || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}