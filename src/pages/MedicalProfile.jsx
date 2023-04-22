import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { setDoc, doc } from "firebase/firestore";
import { AuthContext } from "../store/AuthContext";
import { db } from "../firebase/firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
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
      {/* <div className="min-h-screen w-screen inset-0 z-50 fixed dark:bg-black overflow-y-scroll">
        <div className="text-center mt-20 md:mt-20">
          <h1 className="text-3xl">Edit Medical Profile</h1>
        </div>
        <hr className="my-2" />
        <form className="md:px-8 md:py-8" onSubmit={handleSubmit(submit)}>
          <div className="grid grid-cols-1 mx-4 md:border border-4-[#0E63F4] rounded md:grid-cols-2 gap-8 md:px-8 md:py-8 lg:grid-cols-2">
            <div className=" mb-2 md:flex gap-12">
              <label
                className=" block md:inline text-gray-700 font-bold mb-2 "
                htmlFor="full_Name">
                Full Name:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                {...register("name", {
                  required: true,
                })}
                placeholder="Full Name"
                defaultValue={prof?.name || ""}
                required
              />
            </div>

            <div className="mb-4 md:flex gap-8">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="Email">
                E-mail:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="E-mail"
                {...register("email", {
                  required: true,
                })}
                type="email"
                defaultValue={prof?.email || ""}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4 md:flex gap-12">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="Gender">
                Gender:
              </label>
              <select
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Gender"
                {...register("gender", {
                  required: true,
                })}
                placeholder="Gender"
                required>
                <option value="">--Select--</option>
                <option>Male</option>
                <option>Female</option>
                <option>other</option>
              </select>
            </div>
            <div className="mb-4 md:flex gap-9">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="firstName">
                D.O.B:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="DOB"
                {...register("dateOfBirth", {
                  required: true,
                  valueAsDate: true,
                })}
                type="date"
                required
              />
            </div>

            <div className="mb-4 md:flex gap-3">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="BloodGroup">
                Blood Group:
              </label>
              <select
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="BloodGroup"
                {...register("bloodGroup", {
                  required: true,
                })}
                type="text"
                required>
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
            <div className="mb-4 md:flex gap-2">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="PhoneNumber">
                Phone No:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

            <div className="mb-4 md:flex gap-5">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="Weight">
                Weight (kg):
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Weight"
                {...register("weigth", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                defaultValue={prof?.weigth || ""}
                required
              />
            </div>
            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor=" Marital Status">
                Marital Status:
              </label>
              <select
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id=" MaritalStatus"
                {...register("maritalStatus", {
                  required: true,
                })}
                required>
                <option value="">--Select--</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="height">
                Height (cm):
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                {...register("heigth", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                defaultValue={prof?.heigth || ""}
                required
              />
            </div>

            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="ocuppation">
                Occupation:
              </label>
              <input
                className=" w-full shadow appearance-none border rounded  md:w-3/5  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ocuppation"
                name="firstName"
                type="text"
                required
              />
            </div>
            <div className="mb-4 md:flex ">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="firstName">
                State of Residence:
              </label>

              <input
                className=" w-full shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Address"
                {...register("address", {
                  required: true,
                })}
                rows="4"
                cols="150"
                defaultValue={prof?.adrress || ""}
              />
            </div>
          </div>

          <div className="mx-4 my-2">
            <button
              className=" w-full bg-[#0E63F4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-48  md:mx-4focus:outline-none focus:shadow-outline"
              type="submit">
              Save Record
            </button>
          </div>
        </form>
      </div> */}
      <div className="bg-[#E2E8F0] px-4 md:px-8 lg:px-14 pt-10 font-workSans">
        <div className="pt-10 px-5 sm:px-14 bg-white rounded-2xl">
          <div className="flex justify-between">
            <h4 className="text-black my-auto text-2xl font-semibold">Edit Profile</h4>
            <img src="https://leadership.ng/wp-content/uploads/2023/03/davido.png" className="w-16 h-16 rounded-full" />
          </div>
          <form className="mt-14">
            <div className="sm:flex sm:gap-14">
              <div className="w-full sm:w-1/2">
                <label htmlFor="Fullname" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Full Name</label>
                <input 
                  type="text"
                  name="Fullname"
                  placeholder="David Adeleke"
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4" 
                />
              </div>
              <div className="w-full sm:w-1/2 mt-7 sm:mt-0">
                <label htmlFor="email" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="davidadeleke@gege.com"
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4" />
              </div>
            </div>
            <div className="sm:flex sm:gap-14 mt-7">
              <div className="w-1/3">
                <label htmlFor="Gender" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Gender</label>
                <input 
                  type="text"
                  name="Gender"
                  placeholder="Male"
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4" 
                />
              </div>
              <div className="w-1/2 mt-7 sm:mt-0">
                <label htmlFor="email" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="davidadeleke@gege.com"
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4" />
              </div>
            </div>
            <div className="flex gap-1 sm:gap-5 mt-7">
              <div className="w-1/3">
                <label htmlFor="Weight" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Weight (kg)</label>
                <input 
                  type="number" 
                  name="Weight" 
                  placeholder="85.1"
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4" 
                />
              </div>
              <div className="w-1/3">
                <label htmlFor="Height" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Height (cm)</label>
                <input 
                  type="number" 
                  name="Height" 
                  placeholder="168"
                  className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4" />
              </div>
              <div className="w-1/3">
                <label htmlFor="email" className="text-black font-medium sm:font-semibold text-sm sm:text-2xl">Blood Group</label>
                  <select
                    name="Blood Group"
                    className="block w-full mt-2 py-3 border border-gray-500 active:border-black rounded text-black pl-4 pr-4"
                  >
                  <option>--Select--</option>
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
          </form>
        </div>
      </div>
    </RequireAuth>
  );
};

export default MedicalProfile;
