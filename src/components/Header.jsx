import React, { useState } from "react";
import close_btn from "../assets/close_btn.svg";
import open_btn from "../assets/open_btn.svg";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!isOpen);
  };
  return (
    <header className="w-full stick top-0 inset-x-0 py-4 font-poppins z-50 ">
      <div className="flex max-w-7xl mx-auto justify-between px-6 items-center">
        <h1>PP</h1>
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

        <nav className="fixed w-1/2 inset-y-0 bg-white -translate-x-full md:translate-x-0 md:relative">
          <ul
            className={
              showNav
                ? "block align-center gap-4 flex-col md:flex-row h-full justify-center px-6 text-center"
                : "md:flex gap-4 flex-col md:flex-row h-full justify-center px-6 text-center hidden "
            }>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Profile</li>
            <li className="cursor-pointer">Hospitals</li>
            <li className="cursor-pointer">Appointments</li>
          </ul>
        </nav>
        <div className="md:flex gap-2 hidden">
          <button className="bg-blue-800 text-white px-4 rounded-md py-2">
            Sign up
          </button>
          <button className="border border-blue-800 px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
