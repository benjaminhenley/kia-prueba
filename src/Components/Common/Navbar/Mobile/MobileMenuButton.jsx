import React from 'react';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="h-6 w-6"
      >
        {/* Círculo de fondo en #CDD0D2 */}
        <circle cx="12" cy="12" r="12" fill="#CDD0D2" />

        {/* Líneas en #05141F */}
        {isOpen ? (
          <>
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 11.3152H18V12.6866H6V11.3152Z" fill="#05141F"/>
            </svg>
          </>  

        ) : (
          <>
            <circle cx="12" cy="12" r="12" fill="#CDD0D2" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6866 6H11.3152V18H12.6866V6ZM18 11.3152H6V12.6866H18V11.3152Z" fill="#05141F"/>
            </svg>
          </>
        )}
      </svg>
    </button>
  );
};

export default MobileMenuButton;

