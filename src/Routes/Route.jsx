import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Registration/Login";
import SignUp from "../Pages/Registration/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/blog",
        element: <Blog> </Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp> </SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard> </Dashboard>,
    children: [{}],
  },
]);
