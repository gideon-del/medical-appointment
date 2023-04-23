import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { setDoc, doc } from "firebase/firestore";
import { AuthContext } from "../store/AuthContext";
import { db } from "../firebase/firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import { Link } from "react-router-dom";
const MedicalProfile = () => {
  const { register, handleSubmit } = useForm();
  const {
    user,
    getProfile,
    profile: prof,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const submit = async (data) => {
    setLoading(true);
    await setDoc(doc(db, "profile", `${user?.uid}`), data);
    getProfile(data);
    setLoading(false);
    navigate("/profile");
  };

  return (
    <RequireAuth>
      <main className="bg-[#E2E8F0] px-4 md:px-8 lg:px-14 py-14 font-workSans">
        <section className="pt-10 px-5 sm:px-14 bg-white rounded-2xl">
          <div className="flex justify-between">
            <h4 className="text-black my-auto text-2xl font-semibold">
              Edit Profile
            </h4>
            <img
              src="https://leadership.ng/wp-content/uploads/2023/03/davido.png"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <form className="py-14" onSubmit={handleSubmit(submit)}>
            <div className="sm:flex sm:gap-14">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="Fullname"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Full Name
                </label>
                <input
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                  id="fullName"
                  {...register("name", {
                    required: true,
                  })}
                  placeholder="David Adeleke"
                  defaultValue={prof?.name || ""}
                  required
                />
              </div>
              <div className="w-full sm:w-1/2 mt-7 sm:mt-0">
                <label
                  htmlFor="email"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Email
                </label>
                <input
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                  id="E-mail"
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  defaultValue={prof?.email || ""}
                  placeholder="davidadeleke@gege.com"
                  required
                />
              </div>
            </div>
            <div className="md:flex sm:gap-10 mt-7">
              <div className="w-full md:w-1/3 sm:mt-7 md:mt-0">
                <label
                  htmlFor="Phone Number"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                  id="PhoneNumber"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 8,
                    valueAsNumber: true,
                  })}
                  defaultValue={prof?.phoneNumber}
                  type="text"
                  required
                />
              </div>
              <div className="sm:flex sm:gap-10 w-full mt-7 md:mt-0 md:w-2/3">
                <div className="w-full sm:w-1/2 mt-7 sm:mt-0">
                  <label
                    htmlFor="Gender"
                    className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                  >
                    Gender
                  </label>
                  <select
                    className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                    id="Gender"
                    {...register("gender", {
                      required: true,
                    })}
                    required
                  >
                    <option value="">--Select--</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    <option>Prefer not to respond</option>
                  </select>
                </div>
                <div className="w-full sm:w-1/2 mt-7 sm:mt-0">
                  <label
                    htmlFor="Marital Status"
                    className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                  >
                    Marital Status
                  </label>
                  <select
                    className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                    id=" MaritalStatus"
                    {...register("maritalStatus", {
                      required: true,
                    })}
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:gap-14 mt-10">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="dob"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4 pr-6"
                    id="DOB"
                    {...register("dateOfBirth", {
                      required: true,
                      valueAsDate: true,
                    })}
                    type="date"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 2.5C7.61929 2.5 6.5 3.61929 6.5 5C6.5 6.38071 7.61929 7.5 9 7.5C10.3807 7.5 11.5 6.38071 11.5 5C11.5 3.61929 10.3807 2.5 9 2.5ZM9 8.5C6.51472 8.5 4.5 10.5147 4.5 13C4.5 15.4853 6.51472 17.5 9 17.5C11.4853 17.5 13.5 15.4853 13.5 13C13.5 10.5147 11.4853 8.5 9 8.5ZM9 1C11.4853 1 13.5 3.01472 13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:gap-14 mt-10">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="State"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  State
                </label>
                <input
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                  id="Address"
                  {...register("address", {
                    required: true,
                  })}
                  rows="4"
                  cols="150"
                  placeholder="Osun"
                  defaultValue={prof?.adrress || ""}
                />
              </div>
              <div className="w-full sm:w-1/2 mt-7 sm:mt-0">
                <label
                  htmlFor="allerfy"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Allergies
                </label>
                <input
                  type="text"
                  {...register("allergy", {
                    required: true,
                  })}
                  id="allergy"
                  placeholder="Musician"
                  required
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                />
              </div>
            </div>
            <div className="flex gap-1 sm:gap-5 mt-7">
              <div className="w-1/3">
                <label
                  htmlFor="Weight"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Weight (kg)
                </label>
                <input
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                  id="Weight"
                  {...register("weigth", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="85.1"
                  defaultValue={prof?.weigth || ""}
                  required
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="Height"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Height (cm)
                </label>
                <input
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4"
                  id="height"
                  {...register("heigth", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="168"
                  defaultValue={prof?.heigth || ""}
                  required
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="email"
                  className="text-black font-medium sm:font-semibold text-sm sm:text-lg lg:text-2xl"
                >
                  Blood Group
                </label>
                <select
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4 pr-4"
                  id="BloodGroup"
                  {...register("bloodGroup", {
                    required: true,
                  })}
                  type="text"
                  required
                >
                  <option value="">--Select--</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
            </div>
            <div className="sm:flex mt-10">
              <button
                type="submit"
                className="w-full sm:w-auto px-14 py-3 bg-blue-500 hover:bg-blue-700 border border-blue-500 text-xl font-bold mr-5 rounded"
              >
                Save
              </button>
              <Link to="/profile">
                <button className="w-full mt-5 sm:mt-0 sm:w-auto px-14 py-3 text-blue-500 hover:bg-blue-100 border border-blue-500 text-xl font-bold rounded">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </RequireAuth>
  );
};

export default MedicalProfile;
