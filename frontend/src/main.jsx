import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";   // ✅ IMPORTANT
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>      {/* ✅ THIS FIXES YOUR ERROR */}
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

