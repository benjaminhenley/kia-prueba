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
        path: "/contactenos",
        element: <Contactenos />,
      },
      {
        path: "/concesionarios/venta",
        element: <ConcesionariosVenta />
      },
      {
        path: "/concesionarios/post-venta",
        element: <ConcesionariosPostVenta />
      }
    ],
  },
]);
