import { Dashboard } from "../pages/Dashboard/Dashboard";
import { SelectedClasses } from "../pages/Dashboard/SelectedClasses";

export const dashboardRouter = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "selectedClasses",
    element: <SelectedClasses />,
  },
];
