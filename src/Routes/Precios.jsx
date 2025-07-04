import React, { useState, useEffect } from "react";
import { DisclaimerPrecios } from "../Components/Modelos/tabs/characteristics/Disclaimer";
import Table from "../Components/Common/Table";

const Precios = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carPriceData = {
    headers: [
      { key: "model", label: "Modelo", width: "33%", bold: true },
      { key: "version", label: "Versión", width: "33%" },
      {
        key: "price",
        label: "Precio sugerido al público",
        width: "33%",
        bold: true,
      },
    ],
    details: [
      ["K3 Sedán", "EX 1.6 A/T", "25.000 USD"],
      ["K3 Sedán", "GT-Line 1.6 A/T", "28.500 USD"],
      ["K3 Cross", "EX 1.6 A/T", "25.000 USD"],
      ["K3 Cross", "GT-Line 1.6 A/T", "28.500 USD"],
      ["Seltos", "LX 1.5 A/T", "36.000 USD"],
      ["Sportage", "EX 1.6T 4x2 DCT", "48.000 USD"],
      ["Sportage", "X-Line 1.6T AWD DCT", "56.000 USD"],
      ["Carnival", "EX 2.2R A/T", "65.000 USD"],
      ["Carnival", "SX 2.2R A/T", "75.000 USD"],
      ["K2500", "CS 2.5T MT", "33.000 USD"],
    ],
  };

  return (
    <>
      <div className="mx-4 md:mx-20 mt-[55px] md:mt-[80px]">
        <div className="flex flex-col gap-5 py-10">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-bold">Precios</h1>
            <div className="h-[1.5px] md:w-12 md:h-[2px] w-8 bg-[#05141F]"></div>
          </div>

          {/* ICONS */}
          <div className="flex flex-col md:flex-row md:justify-between gap-2.5">
            <div className="flex items-center justify-start md:justify-between gap-[5px] md:gap-2.5">
              <span className="grid place-items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="Vector"
                    d="M9.1 17H10.85V15.75C11.6833 15.6 12.4 15.275 13 14.775C13.6 14.275 13.9 13.5333 13.9 12.55C13.9 11.85 13.7 11.2083 13.3 10.625C12.9 10.0417 12.1 9.53333 10.9 9.1C9.9 8.76667 9.20833 8.475 8.825 8.225C8.44167 7.975 8.25 7.63333 8.25 7.2C8.25 6.76667 8.40417 6.425 8.7125 6.175C9.02083 5.925 9.46667 5.8 10.05 5.8C10.5833 5.8 11 5.92917 11.3 6.1875C11.6 6.44583 11.8167 6.76667 11.95 7.15L13.55 6.5C13.3667 5.91667 13.0292 5.40833 12.5375 4.975C12.0458 4.54167 11.5 4.3 10.9 4.25V3H9.15V4.25C8.31667 4.43333 7.66667 4.8 7.2 5.35C6.73333 5.9 6.5 6.51667 6.5 7.2C6.5 7.98333 6.72917 8.61667 7.1875 9.1C7.64583 9.58333 8.36667 10 9.35 10.35C10.4 10.7333 11.1292 11.075 11.5375 11.375C11.9458 11.675 12.15 12.0667 12.15 12.55C12.15 13.1 11.9542 13.5042 11.5625 13.7625C11.1708 14.0208 10.7 14.15 10.15 14.15C9.6 14.15 9.1125 13.9792 8.6875 13.6375C8.2625 13.2958 7.95 12.7833 7.75 12.1L6.1 12.75C6.33333 13.55 6.69583 14.1958 7.1875 14.6875C7.67917 15.1792 8.31667 15.5167 9.1 15.7V17ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                    fill="#697279"
                  />
                </svg>
              </span>
              <h4 className="text-[#697279]">
                Lista en: <span className="text-[#05141F]">U$D</span>
              </h4>
            </div>

            <div className="flex items-center justify-start md:justify-between gap-[5px] md:gap-2.5">
              <span className="grid place-items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="Icon">
                    <path
                      id="Vector"
                      d="M17.76 4.26V2H15.85V4.26H12.93V2H11V4.26H8.15V2H6.24V4.26H2V22H22V4.26H17.76ZM6.24 6.26V8H8.15V6.21H11V8H12.91V6.21H15.83V8H17.74V6.21H20.07V9.7H3.91V6.21L6.24 6.26ZM3.91 20.05V11.65H20.09V20.05H3.91Z"
                      fill="#697279"
                    />
                    <path
                      id="Vector_2"
                      d="M8 15.3786C8.36417 15.1345 8.71268 14.8999 9.10817 14.6352C9.71904 15.4781 10.3064 16.2891 10.882 17.0851C12.2996 15.7297 13.7034 14.3874 15.1542 13C15.4949 13.3792 15.7592 13.6777 16 13.9462C14.2496 15.5964 12.4601 17.286 10.6451 19C9.83064 17.8867 8.92805 16.6496 8 15.3805V15.3786Z"
                      fill="#697279"
                      stroke="#697279"
                      stroke-width="0.75"
                    />
                  </g>
                </svg>
              </span>
              <h4 className="text-[#697279]">
                Vigencia desde:{" "}
                <span className="text-[#05141F]">Abril 2025</span>
              </h4>
            </div>
          </div>
        </div>

        <Table data={carPriceData} className="md:pb-10" />
      </div>
      <DisclaimerPrecios />
    </>
  );
};

export default Precios;
