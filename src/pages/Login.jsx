import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/authbg.png";
import { AuthContext, useAuth } from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignIn } from "../lib/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { taoster } from "../lib/toaster";
import AuthRoute from "../components/AuthRoute";
import { getAppoitments } from "../lib/validation";
const Login = () => {
  const { user, login, getProfile, loading, setLoading, setAppointmets } =
    useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, []);
  const signIn = async (data) => {
    try {
      setLoading(true);
      setError("");
      const { user } = await SignIn(data);
      const appoints = await getAppoitments(user.uid);
      setAppointmets(appoints);
      const prof = await getDoc(doc(db, "profile", user.uid));
      if (!prof.data()) {
        login(user);
        setTimeout(() => navigate("/edit"), 500);
        return;
      }
      getProfile(prof.data());
      login(user);
      taoster({ state: "success", message: "Welcome back" });
      setTimeout(() => navigate("/profile"), 500);
    } catch (error) {
      setError(error.message.split("Firebase: Error").join(""));
      taoster({
        state: "error",
        message: error.message.split("Firebase: Error").join(""),
      });
    }
    setLoading(false);
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
                  className="block mb-2 text-xl  font-medium text-gray-900"
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
                  className="block mb-2 text-xl  font-medium text-gray-900"
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
              <p className="text-sm text-gray-300 hover:text-gray-200">
                Forgot your Password?
              </p>
              <button
                type="submit"
                className="w-full mt-3 py-2 text-white text-lg md:text-xl bg-[#0E63F4] rounded-lg relative after:absolute after:inset-0 after:opacity-0 disabled:after:opacity-60 after:bg-gray-700"
                disabled={loading}
              >
                Login
              </button>
              {error && <p className="text-red-600 font-bold">{error}</p>}
              <Link to="/signup" className="mt-2 text-md hover:text-gray-400 text-center font-medium">
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
