import axios from "axios";
import PublicRoute from "../hooks/PublicRoute";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const userRouter = [
  {
    path: "/",
    element: <Home />,
    loader: () => axios.get("http://localhost:5000/classes/popular"),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
];
