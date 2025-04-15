import React from 'react';

const ViewModeToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="inline-flex rounded-full border border-[#CDD0D2] p-[3px] bg-white">
      <button 
        onClick={() => setViewMode('list')}
        className={`px-3 py-[3px] pb-[0.5px] rounded-full text-sm font-medium transition-colors ${
          viewMode === 'list' 
            ? 'bg-midnight-black text-white' 
            : 'bg-transparent text-[#9BA1A5]'
        }`}
      >
        LISTA
      </button>
      <button 
        onClick={() => setViewMode('map')}
        className={`px-3 py-[3px] pb-[0.5px] rounded-full text-sm font-medium transition-colors ${
          viewMode === 'map' 
            ? 'bg-midnight-black text-white' 
            : 'bg-transparent text-[#9BA1A5]'
        }`}
      >
        MAPA
      </button>
    </div>
  );
};

export default ViewModeToggle;