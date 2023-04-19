import { useForm } from "react-hook-form";
import Image from "../assets/authbg.png";
import { SignUp } from "../lib/auth";
import { AuthContext, useAuth } from "../store/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, reset, handleSubmit } = useForm();
  const { login, user, setLoading, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const history = useNavigate();
  const submit = async (data) => {
    try {
      setLoading(true);
      const id = await SignUp({ email: data.email, password: data.password });
      login(id.user);
      reset();

      history("/edit");
    } catch (error) {
      setError(error.message.split("Firebase: Error").join(""));
    }
    setLoading(false);
  };
  useEffect(() => {
    if (user) {
      history("/");
    }
  }, [user]);
  return (
    <>
      <section className=" w-full font-poppins">
        <div className=" flex min-h-screen items-center ml-auto flex-1 ">
          {/* left column container with form  */}

          <div className=" flex-1 px-6 md:px-0 ">
            <form
              className="max-w-xs mx-auto flex flex-col gap-2"
              onSubmit={handleSubmit(submit)}
            >
              <div className="text-center mb-6">
                <h1 className="text-5xl font-medium py-2"> Welcome</h1>
                <p className="text-2xl">Create an account with us</p>
              </div>

              <div className="">
                <label
                  for="fullname"
                  class="block mb-2 md:text-lg text-base font-medium "
                >
                  Fullname
                </label>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-black  w-full mr-3 py-5 px-4 h-2 mb-2 sm:text-sm rounded-lg "
                  placeholder="Fullname"
                  required
                />
              </div>
              <div>
                <label
                  for="Email"
                  class="block mb-2 md:text-lg text-base font-medium "
                >
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="bg-gray-50 border border-gray-300 text-black w-full mr-3 py-5 px-4 h-2 mb-2 text-sm rounded-lg "
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 md:text-lg  text-base font-medium "
                >
                  Enter Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                  placeholder="Enter Password"
                  className="bg-gray-50 border text-black bord w-full mr-3 py-5 px-4 h-2 mb-2 text-sm rounded-lg "
                />
              </div>
              <button
                type="submit"
                className="w-full mt-3 py-2 text-white text-lg md:text-xl bg-[#0E63F4] rounded-lg relative after:absolute after:inset-0 after:opacity-0 disabled:after:opacity-60 after:bg-gray-700"
                disabled={loading}
              >
                Sign up
              </button>
              {error && (
                <p className="text-red-700 font-bold text-center w-full ">
                  {error}
                </p>
              )}
              <Link to="/login" className="mt-2 text-md hover:text-gray-400 text-center font-medium">
                Already have an account? log in
              </Link>
            </form>
          </div>

          {/* Right column container with background*/}
          <div className="hidden max-h-screen md:block  flex-1 ">
            <img
              src={Image}
              className=" object-cover w-full"
              alt="Phone image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;