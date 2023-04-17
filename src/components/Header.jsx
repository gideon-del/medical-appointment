import React, { useContext, useState } from "react";
import close_btn from "../assets/close_btn.svg";
import open_btn from "../assets/open_btn.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
const links = ["Home", "Profile", "Hospital", "Appointments"];
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setShowNav(!isOpen);
  };
  const clear = async () => {
    await signOut(auth);
    logout();
    navigate("/");
  };
  return (
    <header className="w-full stick top-0 inset-x-0 py-4 font-poppins z-50 ">
      <div className="flex max-w-7xl mx-auto justify-between px-6 items-center">
        <h1 className="basis-1/4">PP</h1>
        {!showNav ? (
          <button onClick={toggleNavbar}>
            <img
              src={open_btn}
              alt="open button"
              className="w-8 h-8 md:hidden"
            />
          </button>
        ) : (
          <button onClick={toggleNavbar}>
            <img
              src={close_btn}
              alt="close button"
              className="w-8 h-8 md:hidden"
            />
          </button>
        )}

        <nav className="fixed w-1/2 inset-y-0 bg-white -translate-x-full md:translate-x-0 md:relative flex flex-col md:flex-row md:flex-1 justify-between dark:bg-black items-center">
          <ul
            className={
              showNav
                ? "block align-center gap-4 flex-col md:flex-row h-full justify-center px-6 text-center"
                : "md:flex gap-4 flex-col md:flex-row h-full justify-center px-6 text-center hidden "
            }
          >
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
            <button
              className="bg-blue-800 text-white px-4 rounded-md py-2"
              onClick={clear}
            >
              Log out
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
