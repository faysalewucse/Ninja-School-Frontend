import PrivateRoute from "../hooks/PrivateRoute";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { SelectedClasses } from "../pages/Dashboard/SelectedClasses";

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
