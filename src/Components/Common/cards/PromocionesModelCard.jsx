const PromocionesModelCard = ({ model, image, selected = false, onClick }) => (
  <div
    onClick={onClick}
    className={`w-64 px-2 py-4 cursor-pointer transition-all ${
      selected
        ? "bg-stone-50 outline outline-2 outline-offset-[-2px] outline-gray-700"
        : "hover:bg-stone-50"
    } inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden`}>
    <img
      className="self-stretch h-20 object-contain"
      src={image || "https://placehold.co/256x88"}
      alt={model}
    />
    <div className="self-stretch text-center text-gray-900 font-semibold font-kia">
      <h6>{model}</h6>
    </div>
  </div>
);

export default PromocionesModelCard;
