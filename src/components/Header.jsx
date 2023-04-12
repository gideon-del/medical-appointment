import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="w-full stick top-0 inset-x-0 py-4 font-poppins z-50 sticky dark:bg-black bg-white">
      <div className="flex max-w-7xl mx-auto justify-between px-6 items-center w-full">
        <h1 className="basis-[33%]">PP</h1>
        <nav className="fixed  inset-0 dark:bg-black bg-white text-black -translate-x-full  md:translate-x-0 md:relative flex-1 flex flex-col md:flex-row justify-evenly gap-4 md:justify-between items-center dark:text-white">
          <ul className="flex gap-4 flex-col md:flex-row justify-center px-6 text-center  ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Profile</li>
            <li className="cursor-pointer">Hospitals</li>
            <li className="cursor-pointer">Appointments</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-800 text-white px-4 rounded-md py-2">
              Sign up
            </button>
            <button className="border border-blue-800 px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
