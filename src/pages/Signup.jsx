import React from "react";
import React from "react";
import Image from "../assets/authbg.png";

const Signup = () => {
  return (
    <>
      <section className=" min-h-screen w-full">
        <div className=" flex w-full ">
          {/* left column container with form  */}

          <div
            className=" min-h-screen flex flex-col 
                    items-center justify-center max-w-sm marker:md:w-8/12"
          >
            <form>
              <div className="text-center mb-6">
                <h1 className="text-5xl font-medium py-2"> Welcome</h1>
                <p className="text-2xl">Sign up an account with us</p>
              </div>

              <div className="">
                <label
                  for="fullname"
                  class="block mb-2 text-xl font-medium text-gray-900"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  name="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 sm:text-sm rounded-lg "
                  placeholder="Fullname"
                  required=""
                />
              </div>
              <div>
                <label
                  for="Email"
                  class="block mb-2 text-xl  font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 sm:text-sm rounded-lg "
                  placeholder="Email address"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-xl  font-medium text-gray-900"
                >
                  Enter Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 sm:text-sm rounded-lg "
                />
              </div>
              <button
                type="submit"
                className="w-full text-xl py-3 px-3 text-white bg-[#0E63F4] rounded-lg "
              >
                Sign in
              </button>
              <p class="text-lg text-center font-light text-gray-500 dark:text-gray-400">
                Already have an account? log in
              </p>
            </form>
          </div>

          {/* Right column container with background*/}
          <div className="mb-12 hidden w-full md:block  md:w-8/12 lg:w-6/12">
            <img src={Image} className="w-full" alt="Phone image" />
          </div>
        </div>
      </section>
    </>
  );
};
