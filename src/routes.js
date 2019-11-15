import Home from "./pages/Home";
import NotFound from "./pages/404";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];
