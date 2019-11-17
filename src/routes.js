import Home from "./pages/Home";
import FileTree from "./pages/FileTree";
import NotFound from "./pages/404";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tree",
    name: "tree",
    component: FileTree
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];
