import { renderIcon } from "../../Common/Icons/PromiseToCare";

export const promiseToCareBenefits = [
  {
    id: "digitalizacion",
    title: "Digitalización",
    description:
      "Soluciones digitales innovadoras basadas en las tendencias de la industria de servicios.",
    icon: renderIcon("digitalizacion"),
  },
  {
    id: "conectividad",
    title: "Conectividad",
    description: "Constante, siempre en conexión con los Clientes Kia.",
    icon: renderIcon("conectividad"),
  },
  {
    id: "individualizacion",
    title: "Individualización",
    description: "Servicio diferenciado personalizado para cada cliente.",
    icon: renderIcon("individualizacion"),
  },
  {
    id: "ecoamigable",
    title: "Eco-amigable",
    description: "Cuidado especial para vehículos ecológicos.",
    icon: renderIcon("ecoamigable"),
  },
];

export default function PromiseToCare() {
  return (
    <div className=" mx-auto px-4 md:px-20 py-10 text-[#05141F]">
      <h4>
        La investigación de Kia sobre las necesidades cambiantes de la industria
        de servicios automotrices y las necesidades de los clientes de Kia en
        todo el mundo resultó en una mejor comprensión de cómo es la experiencia
        de servicio ideal. KMC llama a esta visión Ser Excepcional. El nombre
        impacta directamente en el corazón de la cuestión, un grito de guerra
        para todos los empleados de servicio de Kia para ofrecer una experiencia
        de servicio excepcional para los clientes de Kia. La identidad del
        servicio Kia Promise to Care es la realización de la visión del servicio
        Ser Excepcional, que representa los esfuerzos de Kia para proporcionar
        el servicio más excepcional tanto a clientes como a vehículos.
      </h4>
      <h4 className="font-bold mb-5">
        Cuatro palabras claves que representa “Kia promise to care”:
      </h4>
      <div className="flex flex-row mx-auto w-fit">
        {promiseToCareBenefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center gap-2 p-6">
            <div>{benefit.icon}</div>
            <h4 className="font-bold ">{benefit.title}</h4>
            <h5 className="text-center max-w-[273px]">{benefit.description}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
