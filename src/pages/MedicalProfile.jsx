import React from "react";

const MedicalProfile = () => {
  return (
    <>
      {/* Navbar */}
      <div className="min-h-screen w-full">
        <div>
          <button className=" w-36 mt-2 text-xl py-2 px-2 text-white bg-[#0E63F4]  hover:bg-blue-700 rounded-lg absolute top-0 right-0 ...">
            Back
          </button>
        </div>

        <div className="text-center mt-20 md:mt-20">
          <h1 className="text-3xl">Edit Medical Profile</h1>
        </div>
        <hr className="my-2" />
        <form className="md:px-8 md:py-8 ">
          <div className="grid grid-cols-1 mx-4 md:border border-4-[#0E63F4] rounded md:grid-cols-2 gap-8 md:px-8 md:py-8 lg:grid-cols-2">
            <div className=" mb-2 md:flex gap-12">
              <label
                className=" block md:inline text-gray-700 font-bold mb-2 "
                htmlFor="full_Name"
              >
                Full Name:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mb-4 md:flex gap-8">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="Email"
              >
                E-mail:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="E-mail"
                name="Email"
                type="Email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4 md:flex gap-12">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="Gender"
              >
                Gender:
              </label>
              <select
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Gender"
                required
              >
                <option value="">--Select--</option>
                <option>Male</option>
                <option>Female</option>
                <option>other</option>
              </select>
            </div>
            <div className="mb-4 md:flex gap-9">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="firstName"
              >
                D.O.B:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="DOB"
                name="DOB"
                type="date"
                required
              />
            </div>

            <div className="mb-4 md:flex gap-3">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="BloodGroup"
              >
                Blood Group:
              </label>
              <select
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="BloodGroup"
                name="BloodGroup"
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
            <div className="mb-4 md:flex gap-2">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="PhoneNumber"
              >
                Phone No:
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="PhoneNumber"
                name="PhoneNumber"
                type="text"
                required
              />
            </div>

            <div className="mb-4 md:flex gap-5">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="Weight"
              >
                Weight (kg):
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Weight"
                name="Weight"
                type="number"
                required
              />
            </div>
            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor=" Marital Status"
              >
                Marital Status:
              </label>
              <select
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id=" MaritalStatus"
                name=" MaritalStatus"
                required
              >
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
                htmlFor="firstName"
              >
                Height (cm):
              </label>
              <input
                className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="number"
                required
              />
            </div>

            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="firstName"
              >
                Occupation:
              </label>
              <input
                className=" w-full shadow appearance-none border rounded  md:w-3/5  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                required
              />
            </div>
            <div className="mb-4 md:flex ">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="firstName"
              >
                State of Residence:
              </label>

              <input
                className=" w-full shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Address"
                name="Address"
                rows="4"
                cols="150"
              ></input>
            </div>
          </div>

          <div className="mx-4 my-2">
            <button
              className=" w-full bg-[#0E63F4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-48  md:mx-4focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save Record
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MedicalProfile;
