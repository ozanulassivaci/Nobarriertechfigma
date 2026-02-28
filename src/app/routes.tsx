import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { About } from "./pages/About";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: Solutions },
      { path: "about", Component: About },
    ],
  },
]);
