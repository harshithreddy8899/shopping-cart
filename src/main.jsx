import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./Checkout";
import AdditionalMain from "./AdditionalMain";
import ErrorPage from "./Errorpage";
import DefaultProfile from "./DefaultProfile"
const router=createBrowserRouter([
  {
    path: "/",
    element: <AdditionalMain value={0}/>,
    errorElement: <ErrorPage />
  },
  {
    path: "checkout",
    element: <AdditionalMain value={1}/>,
    children: [
      {Index: true, element: <DefaultProfile />}
    ]

  }


]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);