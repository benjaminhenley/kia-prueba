import React from "react";

const Disclaimer = () => {
  return (
    <section className="py-6 sm:py-10 bg-gray-50 text-center text-gray-600">
      <div className="container mx-auto px-4 sm:px-6">
        <h6 className=" mb-1 sm:mb-2">
          Las opciones pueden variar según la región.
        </h6>
        <h6 className=" mb-1 sm:mb-2">
          Toda la información e ilustraciones se basan en los datos disponibles
          en el momento de la publicación y están sujetos a cambios sin previo
          aviso.
        </h6>
        <h6 className="">
          Póngase en contacto con su distribuidor local de Kia para obtener
          información actualizada.
        </h6>
      </div>
    </section>
  );
};

export default Disclaimer;
