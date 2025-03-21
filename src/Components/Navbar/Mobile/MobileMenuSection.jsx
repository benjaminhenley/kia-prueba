import React from 'react';
import MobileMenuButton from './MobileMenuButton';

const MobileMenuSection = ({ title, isActive, onClick, children }) => {
  return (
    <div>
      <div 
        className={`flex justify-between items-center p-3 border-b border-[#CDD0D2] cursor-pointer ${isActive ? 'bg-midnight-black' : ''}`} 
        onClick={onClick}
      >
        <span className={`font-semibold ${isActive ? 'text-white' : ''}`}>{title}</span>
        <MobileMenuButton isOpen={isActive} onClick={onClick} />
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {children}
      </div>
    </div>
  );
};

export default MobileMenuSection;
