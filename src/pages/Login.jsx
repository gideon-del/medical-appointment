import { useContext, useEffect, useState } from "react";
import Image from "../assets/authbg.png";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignIn } from "../lib/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
const Login = () => {
  const { user, login, getProfile, loading, setLoading } =
    useContext(AuthContext);
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
      login(user);
      const prof = await getDoc(doc(db, "profile", user.uid));
      if (!prof.data()) {
        navigate("/edit");
        return;
      }
      getProfile(prof.data());
      navigate("/profile");
    } catch (error) {
      setError(error.message.split("Firebase: Error").join(""));
    }
    setLoading(false);
  };
  return (
    <>
      <section className=" min-h-screen w-full">
        <div className=" flex  ">
          {/* left column container with form  */}

          <div
            className="  flex flex-col 
                    items-center flex-1 px-5"
          >
            <form
              className="flex flex-col gap-4 max-w-sm m-auto"
              onSubmit={handleSubmit(signIn)}
            >
              <div className="text-center mb-6">
                <h1 className="text-5xl font-medium py-2"> Welcome</h1>
                <p className="text-2xl">Login to continue using the service</p>
              </div>

              <div>
                <label
                  for="Email"
                  className="block mb-2 text-xl  font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 sm:text-sm rounded-lg "
                  placeholder="Email address"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="password"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full mr-3 py-5 px-4 h-2 mb-2 sm:text-sm rounded-lg "
                />
              </div>
              <p className="text-lg text-center font-light text-[#3757BC]">
                Forget your Password
              </p>
              <button
                type="submit"
                className="w-full text-xl py-3 px-3 text-white bg-[#0E63F4] rounded-lg relative after:absolute after:inset-0 after:opacity-0 after:bg-gray-700 disabled:after:opacity-60 "
                disabled={loading}
              >
                Login
              </button>
              {error && <p className="text-red-600 font-bold">{error}</p>}
              <p className="text-lg text-center font-light text-[#3757BC]">
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
