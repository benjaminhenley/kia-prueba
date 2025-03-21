import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Routes/ErrorPage";
import Layout from "../Routes/Layout";
import Inicio from "../Routes/Inicio";
import Modelos from "../Routes/Modelos";

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
        path: "modelos/:modelID",
        element: <Modelos />,
      },
    ],
  },
]);
