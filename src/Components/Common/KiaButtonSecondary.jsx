import React from 'react'

const KiaButtonSecondary = (props) => {

    const {href, target, onClick, titulo} = props;

  return (
        <div>
            <a
                href={href}
                target={target}
                rel="noreferrer"
                onClick={onClick}
            >
                <button
                className="border border-midnight-black text-mindnight-black hover:border-[#37434C] text-sm hover:text-[#37434C] font-bold rounded-full flex items-center mx-auto 
                hover:border-[#37434C] 
                transition-all duration-300 group relative">
                <div className="flex items-center py-[1px] pl-3 pr-[0.046875rem]">
                    <span className="relative inline-block mr-3">
                    {titulo}
                    <span className="absolute left-0 bottom-[1px] h-[1px] group-hover:bg-[#37434C] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <div className="flex items-center justify-center w-[24px] h-[24px]">
                    <svg
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group">
                        <circle
                        cx="12"
                        cy="12"
                        r="11.5"
                        fill="#05141F"
                        className="group-hover:fill-[#37434C]"
                        />
                        <path
                        d="M14.93 12.45c0.044 0.055 0.07 0.125 0.07 0.2 0 0.075-0.026 0.145-0.07 0.2l-4.586 5.8h-1.344l4.752-6L9 6.85h1.344l4.586 5.6z"
                        fill="#fff"
                        />
                    </svg>
                    </div>
                </div>
                </button>
             </a>
        </div>
  )
}

export default KiaButtonSecondary