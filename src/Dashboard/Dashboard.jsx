import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="md:w-64 min-h-screen bg-[#D2042D] text-white">
        <ul className="menu p-4 space-y-2 mt-10">
          <>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/adminhome">Admin Home</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/allusers">All Users</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/alldonationrequest">
                All Donation Requests
              </NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/addblog">Add Blog</NavLink>
            </li>
          </>
        </ul>
        <ul className="menu p-4 space-y-2 border-t-2">
          <li className="text-xl font-semibold">
            <NavLink to="/">Home</NavLink>{" "}
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <div>
          <h2
            className="border border-red-500 p-4 text-white
           text-4xl bg-red-400 font-bold justify-center text-center"
          >
            Welcome to Dashboard
          </h2>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
