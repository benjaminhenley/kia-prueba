import { useState } from 'react';

export default function DealersTable({ dealers = [], showResultsCount = true }) {
  
  // Asegurarse de que dealers sea un array y filtrar según el término de búsqueda
  const safeDealers = Array.isArray(dealers) ? dealers : [];
  const filteredDealers = safeDealers.filter(dealer => 
    dealer?.nombre?.toLowerCase() ||
    dealer?.direccion?.toLowerCase()
  );

  return (
    <div className="w-full mx-auto mt-4 md:mt-[4rem]">
        <>
          {/* Table view for medium screens and above */}
          <div className="overflow-hidden border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-midnight-black text-white">
                  <th className="p-2 md:p-4 text-left md:text-lg text-sm font-semibold">Nombre</th>
                  <th className="p-2 md:p-4 text-left md:text-lg text-sm font-semibold">Dirección</th>
                  <th className="p-2 md:p-4 text-left md:text-lg text-sm font-semibold">Horario de atención</th>
                </tr>
              </thead>
              <tbody className='border-[#CDD0D2]'>
                {filteredDealers.map((dealer, index) => (
                  <tr 
                    key={dealer.id || index} 
                    className={`${index % 2 === 0 ? 'bg-[#CDD0D299]' : 'bg-[#CDD0D233]'} transition-colors`}
                  >
                    <td className="p-2 md:p-4 md:text-lg text-sm border-t border-r border-[#CDD0D2] font-medium">{dealer.nombre || dealer.name || ''}</td>
                    <td className="p-2 md:p-4 md:text-lg text-sm border-t border-r border-[#CDD0D2]">{dealer.direccion || dealer.address || ''}</td>
                    <td className="p-2 md:p-4 md:text-lg text-sm border-t border-[#CDD0D2]">{dealer.horario || dealer.hours || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
    </div>
  );
}