import React from "react";
import Image from "../assets/authbg.png";

const Login = () => {
  return (
    <>
      <section className=" min-h-screen w-full">
        <div className=" flex  ">
          {/* left column container with form  */}

          <div className="  flex flex-col items-center flex-1 px-5">
            <form className="flex flex-col gap-4 max-w-sm m-auto">
              <div className="text-center mb-6">
                <h1 className="text-5xl font-medium py-2"> Welcome</h1>
                <p className="text-2xl">Login to continue using the service</p>
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
              <p class="text-lg text-center font-light text-[#3757BC]">
                Forget your Password
              </p>
              <button
                type="submit"
                className="w-full text-xl py-3 px-3 text-white bg-[#0E63F4] rounded-lg "
              >
                Login
              </button>
              <p class="text-lg text-center font-light text-[#3757BC]">
                No account with us yet? Sign up
              </p>
            </form>
          </div>

          {/* Right column container with background*/}
          <div className="hidden max-h-screen w-full md:block md:w-8/12 lg:w-6/12">
            <img
              src={Image}
              className="w-full h-full object-cover"
              alt="Phone image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
