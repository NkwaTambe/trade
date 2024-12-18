import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <BrowserRouter basename="/">
     <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
);
