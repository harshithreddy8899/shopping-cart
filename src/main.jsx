import React from "react";
import ReactDom from 'react-dom/client';

import App from './App';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const route=createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//     children: [
//       {index: true, element: <DefaultProfile /> },
//     ]

//   }


// ]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);