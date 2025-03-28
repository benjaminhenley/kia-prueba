import React from "react";

const Disclaimer = () => {
  return (
    <section className="py-5 sm:py-10 px-4 bg-[#F8F8F8] text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <h6 className="font-bold text-[#697279]">
          Las opciones pueden variar según la región.
        </h6>
        <h6 className="font-bold text-[#697279]">
          Toda la información e ilustraciones se basan en los datos disponibles
          en el momento de la publicación y están sujetos a cambios sin previo
          aviso.
        </h6>
        <h6 className="font-bold text-[#697279]">
          Póngase en contacto con su distribuidor local de Kia para obtener
          información actualizada.
        </h6>
      </div>
    </section>
  );
};

export default Disclaimer;
