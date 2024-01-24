import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="w-64 min-h-full bg-orange-400">
        <ul>
          <li>
            <NavLink to="/dashboard/cart"> my cart </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet> </Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
