import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Routes/ErrorPage";
import Layout from "../Routes/Layout";
import Inicio from "../Routes/Inicio";
import Modelos from "../Routes/Modelos";
import Promociones from "../Routes/Promociones";
import Cookies from "../Routes/Cookies";

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
      // {
      //   path: "/promociones",
      //   element: <Promociones />,
      // },
      // {
      //   path: "/cookies",
      //   element: <Cookies />,
      // },
    ],
  },
]);
