import axios from "axios";
import PublicRoute from "../hooks/PublicRoute";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Instructors } from "../pages/Instructors";
import { Classes } from "../pages/Classes";

export const userRouter = [
  {
    path: "/",
    element: <Home />,
    loader: () =>
      axios.get(`${import.meta.env.VITE_BASE_API_URL}/classes/popular`),
  },
  {
    path: "/instructors",
    element: <Instructors />,
    loader: () => axios.get(`${import.meta.env.VITE_BASE_API_URL}/instructors`),
  },
  {
    path: "/classes",
    element: <Classes />,
    loader: () => axios.get(`${import.meta.env.VITE_BASE_API_URL}/classes`),
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
