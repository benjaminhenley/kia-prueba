import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Routes/ErrorPage";

import Layout from "../Routes/Layout";
import Inicio from "../Routes/Inicio"
import AllNewK3Cross from "../Routes/AllNewK3Cross";
import AllNewK3Sedan from "../Routes/AllNewK3Sedan";



export const router = createBrowserRouter([
      {
        element: <Layout />,
        errorElement: <ErrorPage />,
        path: '/',
        children: [
          {
            path: '',
            element: <Inicio />,
          }, 
          {
            path: 'all-new-k3-cross',
            element: <AllNewK3Cross/>,
          }, 
          {
            path: 'all-new-k3-sedan',
            element: <AllNewK3Sedan/>,
          }, 
        ]       
       }
]
)



