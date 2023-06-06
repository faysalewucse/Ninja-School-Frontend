import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";

export const userRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
