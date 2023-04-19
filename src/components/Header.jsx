import React, { useState } from "react";
import close_btn from "../assets/close_btn.svg";
import open_btn from "../assets/open_btn.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
const links = ["Home", "Profile", "Hospital"];
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
  return (
    <header className="w-full sticky dark:bg-black bg-white top-0 inset-x-0 py-4 font-poppins z-50 ">
      <div className="flex max-w-7xl mx-auto justify-between px-6 items-center">
        <h1 className="basis-[40%]">DocFinder NG</h1>
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
          <ul className="flex flex-col md:flex-row justify-center items-center gap-10">
            {links.map((link) => (
              <li key={link} className="cursor-pointer">
                <NavLink
                  to={`${link === "Home" ? "/" : `/${link.toLowerCase()}`}`}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-4">
            {user ? (
              <button
                className="bg-blue-800 text-white px-4 rounded-md py-2"
                onClick={clear}
              >
                Log out
              </button>
            ) : (
              <>
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
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
