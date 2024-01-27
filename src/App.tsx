import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <h1 className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
          Hello
        </h1>
      );
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
