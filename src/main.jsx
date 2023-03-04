import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loader from "./components/uiKits/Loader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<Loader customSize={60} suspense />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
