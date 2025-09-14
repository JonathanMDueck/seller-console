import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/layout/app";
import Leads from "./pages/leads/leads";
import Opportunities from "./pages/opportunities/opportunities";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Leads />,
      },
      {
        path: "/opportunities",
        element: <Opportunities />,
      },
    ],
  },
]);
