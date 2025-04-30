import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Routes/ErrorPage";
import Layout from "../Routes/Layout";
import Inicio from "../Routes/Inicio";
import Modelos from "../Routes/Modelos";
import Promociones from "../Routes/Promociones";
import Cookies from "../Routes/Cookies";
import Contactenos from "../Routes/Contactenos";
import ConcesionariosVenta from "../Routes/ConcesionariosVenta";
import ConcesionariosPostVenta from "../Routes/ConcesionariosPostVenta";
import CotizarService from "../Routes/CotizarService";
import CotizaTuService from "../Components/CotizarService/Sections/CotizaTuService";
import PromiseToCare from "../Components/CotizarService/Sections/PromiseToCare";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        path: "",
        element: <Inicio />,
      },
      {
        path: ":modelID",
        element: <Modelos />,
      },
      {
        path: "/promociones",
        element: <Promociones />,
      },
      {
        path: "/politica-de-cookies",
        element: <Cookies />,
      },
      {
        path: "/contacto",
        element: <Contactenos />,
      },
      {
        path: "/red-venta",
        element: <ConcesionariosVenta />,
      },
      {
        path: "/red-postventa",
        element: <ConcesionariosPostVenta />,
      },
      // {
      //   path: "/cotizar-service/",
      //   element: <CotizarService />,
      //   children: [
      //     {
      //       path: "",
      //       element: <CotizaTuService />,
      //     },
      //     {
      //       path: "promise",
      //       element: <PromiseToCare />,
      //     },
      // {
      //   path: "garantia",
      //   element: <Garantia />,
      // },
      // {
      //   path: "originales",
      //   element: <Originales />,
      // },
      //   ],
      // },
    ],
  },
]);
