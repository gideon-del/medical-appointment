// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const NotAuthHeader = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 py-2 flex-col flex md:flex-row justify-between items-center">
        <h1 to={"/"} className="text-xl">DocFinder NG</h1>

        <div className="flex flex-row gap-4">
          <NavLink to="/signup">
            <button className="bg-blue-800 text-white px-4 rounded-md py-2">
              Sign up
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className="border border-blue-800 px-4 py-2 rounded-md">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NotAuthHeader;
