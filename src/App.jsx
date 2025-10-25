import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Error, HomeLayout, Landing, Job, Jobs, Contact } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/:id",
        element: <Job />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
