import { createBrowserRouter } from "react-router-dom";
import { Error404, Home } from "../components";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);
