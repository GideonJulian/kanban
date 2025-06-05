import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";

const route = createBrowserRouter([
  {
    index: true,
    element: <Signup />,
  },
  {
    
  }
]);
function App() {
  return <RouterProvider router={route} />;
}
export default App;
