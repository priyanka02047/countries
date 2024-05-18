import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ErrorDetail from "./components/ErrorDetail";
import CountryDetail from "./components/CountryDetail";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/country/:countryId",
        element: <CountryDetail />,
      },
    ],
    errorElement: <ErrorDetail />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
