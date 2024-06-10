import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// eslint-disable-next-line no-unused-vars
import fonts from "./services/fonts.jsx";
import { BasketContextProvider } from "./context/BasketContextProvider.jsx"; 

import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
     <BasketContextProvider>
        <App />
      </BasketContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
