import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Shared/Navbar/MainLayout/MainLayout";
import "./index.css";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import Blogs from "./Pages/Blogs/Blogs";
import Statistics from "./Pages/Statistics/Statistics";


const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Statistics/>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
