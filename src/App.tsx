import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <h1 className="bg-sky-700 px-4 py-2 text-white  hover:bg-sky-800 sm:px-8 sm:py-3">
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
