import React from "react";

const Vr = ({ href }) => {
  return (
    <section className=" bg-gray-50">
      <iframe src={href} className="w-full h-screen md:h-[70vh]"></iframe>
    </section>
  );
};

export default Vr;
