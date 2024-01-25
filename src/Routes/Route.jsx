import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Registration/Login";
import SignUp from "../Pages/Registration/SignUp";
import AllUsers from "../Dashboard/AllUsers";
import AllDonationRequest from "../Dashboard/AllDonationRequest";
import AdminHome from "../Dashboard/AdminHome";
import AddBlog from "../Dashboard/AddBlog";
import PrivateRoute from "./PrivateRoute";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import Registration from "../Pages/Home/Registration";

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
        path: "/donationrequest",
        element: <DonationRequest> </DonationRequest>,
      },
      {
        path: "/registration",
        element: <Registration> </Registration>,
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
    element: (
      <PrivateRoute>
        <Dashboard> </Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "allusers",
        element: <AllUsers> </AllUsers>,
      },
      {
        path: "alldonationrequest",
        element: <AllDonationRequest> </AllDonationRequest>,
      },
      {
        path: "adminhome",
        element: <AdminHome> </AdminHome>,
      },
      {
        path: "addblog",
        element: <AddBlog> </AddBlog>,
      },
    ],
  },
]);
