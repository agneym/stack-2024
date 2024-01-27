import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <h1>Hello</h1>;
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
