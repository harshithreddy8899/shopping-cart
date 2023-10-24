import React from "react";
import ReactDom from 'react-dom/client';
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import Chicken from "./Chicken";
import ErrorPage from './Errorpage';
import App from './App';
import Profile from "./Profile";
import DefaultProfile from './DefaultProfile';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {index: true, element: <DefaultProfile /> },
    ]

  }


]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);