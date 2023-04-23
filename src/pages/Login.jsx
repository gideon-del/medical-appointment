import { useEffect, useState } from "react";
import Image from "../assets/authbg.png";
import { useAuth } from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { taoster } from "../lib/toaster";
import AuthRoute from "../components/AuthRoute";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const { user, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const loginUser = useLogin("login");
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, []);
  const signIn = async (data) => {
    try {
      setLoading(true);
      setError("");
      await loginUser(data);
    } catch (error) {
      setError(error.message.split("Firebase: Error").join(""));
      taoster({
        state: "error",
        message: error.message.split("Firebase: Error").join(""),
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthRoute>
      <section className=" w-full font-poppins">
        <div className=" flex min-h-screen items-center ml-auto flex-1 ">
          {/* left column container with form  */}

          <div className="flex flex-col items-center flex-1 px-5">
            <form
              className="max-w-xs mx-auto flex flex-col gap-2"
              onSubmit={handleSubmit(signIn)}
            >
              <div className="text-center mb-6">
                <h1 className="text-5xl font-medium py-2"> Welcome</h1>
                <p className="text-2xl">Login to access our service</p>
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block mb-2 text-xl font-medium "
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
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-xl  font-medium"
                >
                  Enter Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border text-black bord w-full mr-3 py-5 px-4 h-2 mb-2 text-sm rounded-lg "
                />
              </div>
              <button
                type="submit"
                className="w-full mt-3 py-2 text-white text-lg md:text-xl bg-[#0E63F4] rounded-lg relative after:absolute after:inset-0 after:opacity-0 disabled:after:opacity-60 after:bg-gray-700"
                disabled={loading}
              >
                Login
              </button>
              {error && <p className="text-red-600 font-bold">{error}</p>}
              <Link
                to="/signup"
                className="mt-2 text-md hover:text-gray-400 text-center font-medium"
              >
                Don't have an account? Sign Up
              </Link>
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
    </AuthRoute>
  );
};

export default Login;
