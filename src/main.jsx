import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Shared/Navbar/MainLayout/MainLayout";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
