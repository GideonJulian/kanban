import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard ";
import Inventory from "./pages/Inventory ";
import Report from "./pages/Reports";
import Suppliers from "./pages/Suppliers";
import Orders from "./pages/Orders";
import ManageStore from "./pages/ManageStore";
const route = createBrowserRouter([
  {
    index: true,
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "inventory",
        elem
      },
      {
        path: "reports",
        element: <Report />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "manage-store",
        element: <ManageStore />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}
export default App;
