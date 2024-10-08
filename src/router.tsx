import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/ui/layouts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
