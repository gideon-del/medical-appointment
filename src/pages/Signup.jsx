import Image from "../assets/authbg.png";

const Signup = () => {
  return (
    <>
      <section className="  w-full font-poppins">
        <div className=" flex w-full min-h-screen items-center ml-auto ">
          {/* left column container with form  */}

          <div className=" flex-1 px-6 md:px-0 ">
            <form className="max-w-xs mx-auto flex flex-col gap-2">
              <div className="text-center mb-6">
                <h1 className="lg:text-5xl md:text-2xl text-xl font-bold py-2">
                  {" "}
                  Welcome
                </h1>
                <p className="lg:text-2xl md:text-xl text-lg font-medium">
                  Sign up an account with us
                </p>
              </div>

              <div className="">
                <label
                  for="fullname"
                  class="block mb-2 md:text-lg text-base font-medium text-gray-900"
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
                  class="block mb-2 md:text-lg text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 text-sm rounded-lg "
                  placeholder="Email address"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 md:text-lg  text-base font-medium text-gray-900"
                >
                  Enter Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 text-sm rounded-lg "
                />
              </div>
              <button
                type="submit"
                className="w-full  py-2  text-white text-lg md:text-xl bg-[#0E63F4] rounded-lg "
              >
                Sign in
              </button>
              <p class="text-lg text-center text-[#3757BC] font-medium">
                Already have an account? log in
              </p>
            </form>
          </div>

          {/* Right column container with background*/}
          <div className="hidden w-full md:block flex-1 ">
            <img src={Image} className="w-full" alt="Phone image" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
