import { createBrowserRouter } from "react-router";
import Login from "../page/Login";
import Rigister from "../page/Rigister";
import Todolist from "../page/Todolist";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Rigister />,
      },
      {
        path: "todolist/:id",
        element: <Todolist />,
      },
    ],
  },
]);

export default router;
