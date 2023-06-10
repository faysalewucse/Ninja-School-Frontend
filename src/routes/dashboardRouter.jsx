import { Dashboard } from "../pages/Dashboard/Dashboard";
import { SelectedClasses } from "../pages/Dashboard/SelectedClasses";
import PrivateRoute from "./PrivateRoute";

export const dashboardRouter = [
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "selectedClasses",
    element: <SelectedClasses />,
  },
];
