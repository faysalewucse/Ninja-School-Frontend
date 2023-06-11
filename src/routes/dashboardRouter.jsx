import { Dashboard } from "../pages/Dashboard/Dashboard";
import { EnrolledClasses } from "../pages/Dashboard/EnrolledClasses";
import { Payments } from "../pages/Dashboard/Payments";
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
  {
    path: "enrolledClasses",
    element: <EnrolledClasses />,
  },
  {
    path: "payments",
    element: <Payments />,
  },
];
