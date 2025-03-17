import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './Router/router';
import Provider from "./Application/Provider";
import "./index.css";
import '../src/assets/css/styles.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider>
          <div className="App">
            <RouterProvider router={router}/>
          </div>  
      </Provider> 
    </React.StrictMode>
);