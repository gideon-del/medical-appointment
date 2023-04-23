import React, { useState } from "react";
import close_btn from "../assets/close_btn.svg";
import open_btn from "../assets/open_btn.svg";
import { Link } from "react-router-dom";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { HiOutlineUserCircle } from "react-icons/hi";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setShowNav((prev) => !prev);
  };
  const clear = async () => {
    await signOut(auth);
    logout();
    navigate("/");
  };
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };
  const location = useLocation();
  return (
    <header className="w-full sticky  bg-white top-0 inset-x-0 py-8 md:py-4 font-poppins z-50 ">
      <div className="flex justify-between px-8 md:px-20 items-center">
        <Link to="/">
          <h1 className="text-2xl font-semibold">DocFinder NG</h1>
        </Link>
        <button onClick={toggleNavbar}>
          <img
            src={showNav ? close_btn : open_btn}
            alt="close button"
            className="w-8 h-8 md:hidden"
          />
        </button>
        <nav
          className={`fixed w-1/2 left-0 py-10 md:py-3 inset-y-0 bg-white -translate-x-full md:translate-x-0 md:relative flex flex-col md:flex-row md:flex-1 justify-between dark:bg-black items-center transition-all duration-300 z-50 ease-in ${
            showNav ? "translate-x-0" : " -translate-x-full"
          } `}
        >
          <ul className="md:hidden flex flex-col md:flex-row justify-center items-center gap-10">
            <li>
              <h1 className="text-2xl font-semibold">DocFinder NG</h1>
            </li>
            <li className="cursor-pointer" onClick={() => setShowNav(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            {user ? (
              <li className="cursor-pointer" onClick={() => setShowNav(false)}>
                <NavLink to="/edit">Edit Profile</NavLink>
              </li>
            ) : (
              <li className="cursor-pointer" onClick={() => setShowNav(false)}>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
          </ul>
          <div className="flex flex-col md:ml-auto md:flex-row gap-4">
            {user ? (
              <>
                <div className="hidden md:block">
                  <button
                    className="bg-gray-300 text-gray-700 font-semibold px-2 py-1 rounded inline-flex items-center"
                    onClick={toggleDropdown}
                  >
                    <HiOutlineUserCircle size="35px" />
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul
                    className={`absolute text-gray-700 right-0 pt-1 w-32 ${
                      showDropDown ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      {location.pathname === "/profile" ? (
                        <Link
                          to="/edit"
                          className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 text-center block"
                          onClick={() => setShowDropDown(false)}
                        >
                          Edit Profile
                        </Link>
                      ) : (
                        <Link
                          to="/profile"
                          className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 text-center block"
                          onClick={() => setShowDropDown(false)}
                        >
                          Profile
                        </Link>
                      )}
                    </li>
                    <li>
                      <button
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block w-full"
                        onClick={clear}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  className="visible md:hidden bg-blue-800 text-white px-4 rounded-md py-3 w-36 md:w-28"
                  onClick={clear}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/signup">
                  <button className="bg-blue-800 text-white px-4 rounded-md py-3 w-36 md:w-28">
                    Sign up
                  </button>
                </NavLink>

                <NavLink to="/login">
                  <button className="border border-blue-800 px-4 rounded-md py-3 w-36 md:w-28">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
