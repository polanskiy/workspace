import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { RemovedtoDoItems } from "../pages/removedToDoItems";
import { Navigation } from "../components/navigation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/removed-todoitems",
        element: <RemovedtoDoItems />,
      },
    ],
  },

  {
    path: "/account",
    element: <>use accouint</>,
  },
]);
