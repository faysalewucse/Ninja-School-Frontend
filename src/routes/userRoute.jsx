import axios from "axios";
import PublicRoute from "./PublicRoute";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Instructors } from "../pages/Instructors";
import { Classes } from "../pages/Classes";

export const userRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/instructors",
    element: <Instructors />,
    loader: async () =>
      await axios.get(`${import.meta.env.VITE_BASE_API_URL}/instructors`),
  },
  {
    path: "/classes",
    element: <Classes />,
    loader: async () =>
      await axios.get(`${import.meta.env.VITE_BASE_API_URL}/classes`),
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
