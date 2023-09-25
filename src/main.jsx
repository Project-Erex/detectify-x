import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Maincontent from "./Components/Main/Maincontent";
import DiffHome from "./Components/DiffChecker/DiffHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maincontent />,
    children: [
      {
        path: "/diffchecker",
        element: <DiffHome />,
      },
    ],
  },
  // {
  //   path: "/diffchecker",
  //   element: <DiffHome />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
