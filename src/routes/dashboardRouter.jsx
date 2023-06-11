import { AddClass } from "../pages/Dashboard/AddClass";
import { MyClasses } from "../pages/Dashboard/MyClasses";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { EnrolledClasses } from "../pages/Dashboard/EnrolledClasses";
import { Payments } from "../pages/Dashboard/Payments";
import { SelectedClasses } from "../pages/Dashboard/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import { InstructorRoute } from "./InstructorRoute";
import { AdminRoute } from "./AdminRoute";
import { ManageClasses } from "../pages/Dashboard/ManageClasses";
import { ManageUsers } from "../pages/Dashboard/ManageUsers";

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
  {
    path: "addClass",
    element: (
      <InstructorRoute>
        <AddClass />
      </InstructorRoute>
    ),
  },
  {
    path: "classes",
    element: (
      <InstructorRoute>
        <MyClasses />
      </InstructorRoute>
    ),
  },
  {
    path: "manageClasses",
    element: (
      <AdminRoute>
        <ManageClasses />
      </AdminRoute>
    ),
  },
  {
    path: "manageUsers",
    element: (
      <AdminRoute>
        <ManageUsers />
      </AdminRoute>
    ),
  },
];
