import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import { AuthContext } from "../store/AuthContext";
import {
  convertUnixTimestamp,
  dateToUnix,
  capitalizeWords,
} from "../lib/converters";
import useAppointment from "../hooks/useAppointments";
import UpcomingApp from "../components/UpcomingApp";
import PastApp from "../components/PastApp";

const Profile = () => {
  const { profile, loading, appointments } = useContext(AuthContext);
  const [appointmentType, setAppointmentType] = useState(
    "Upcoming Appoinments"
  );
  const { past, upcoming } = useAppointment();
  const location = useLocation();
  const currentDateUnix = Math.floor(Date.now() / 1000);
  if (!loading && !profile) {
    return <Navigate to="/edit" state={{ from: location }} replace />;
  } else {
    return (
      <RequireAuth>
        <main className="bg-[#E2E8F0] py-5 md:py-10 lg:py-14 px-5 md:px-14 lg:px-20 font-workSans">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-2/3 bg-white rounded-2xl p-5 lg:p-8">
              <div className="flex justify-between">
                <h4 className="text-black text-2xl font-bold ">Profile</h4>
                <Link to="/edit">
                  <div className="flex bg-gray-300 hover:bg-gray-400 my-auto px-6 py-2 rounded-2xl font-semibold gap-2 tracking-tight">
                    <FaEdit className="my-auto" />
                    Edit<span className="hidden sm:block">Profile</span>
                  </div>
                </Link>
              </div>
              <div className="md:flex mt-5">
                <div className="w-full md:w-2/5 text-center">
                  <div
                    alt="Profile Icon"
                    className="w-24 h-24 rounded-full mx-auto text-8xl font-black bg-orange-500 text-white"
                  >
                    {profile?.name.charAt(0)}
                  </div>
                  <h4 className="text-2xl font-bold text-black truncate mt-2">
                    {profile?.name}
                  </h4>
                  <p className="text-gray-500 mt-2 truncate">
                    {profile?.email}
                  </p>
                  <h4 className="text-lg text-black font-bold mt-4 font-poppins">
                    Appointments
                  </h4>
                  <div className="flex justify-center">
                    <div>
                      <h4 className="text-5xl font-bold text-black mx-auto px-6 w-max border border-t-black">
                        {upcoming?.length}
                      </h4>
                      <p className="text-gray-400">Upcoming</p>
                    </div>
                    <div>
                      <h4 className="text-5xl font-bold text-black mx-auto px-6 w-max border border-t-black">
                        {past?.length}
                      </h4>
                      <p className="text-gray-400">Past</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 px-6 w-full md:w-3/5 mt-5 md:mt-0 md:border-l md:border-gray-500">
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Gender</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {profile?.gender}
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">
                      Birthday
                    </h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {convertUnixTimestamp(profile?.dateOfBirth.seconds)}
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">
                      Phone Number
                    </h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {profile?.phoneNumber}
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">
                      Marital Status
                    </h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {capitalizeWords(profile?.maritalStatus)}
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">
                      Blood Group
                    </h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {profile?.bloodGroup}
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">State</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {profile?.address}
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Height</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {profile?.heigth} cm
                    </p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Weight</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">
                      {profile?.weigth} kg
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-5">
              <h4 className="text-black text-2xl font-bold ">Payments</h4>
              <div className="flex items-center justify-center text-black h-72 text-3xl font-bold">
                Coming Soon
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-2xl text-black p-7">
            <div className="flex flex-col mx-auto md:flex-row md:justify-between">
              <div className="sm:flex bg-gray-300 p-1.5 rounded-2xl w-full md:w-max">
                {["Upcoming Appoinments", "Past Appoinments"].map((type) => {
                  return (
                    <button
                      key={type}
                      onClick={() => setAppointmentType(type)}
                      className={`w-full md:mx-2.5 rounded-2xl text-md font-semibold md:px-5 py-3 truncate
                    ${
                      appointmentType === type
                        ? "bg-white text-blue-500"
                        : "text-gray-600"
                    }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
              <Link to="/hospital">
                <button className="w-full mt-5 md:mt-0 md:w-max basis-1 bg-blue-500 hover:bg-blue-700 px-5 py-3 text-white font-semibold rounded-2xl">
                  Make Appointment
                </button>
              </Link>
            </div>
            <div className="bg-gray-300 px-5 py-0.5 mt-6 rounded-2xl">
              {appointmentType === "Upcoming Appoinments" ? (
                <UpcomingApp />
              ) : (
                <PastApp />
              )}
            </div>
          </div>
        </main>
      </RequireAuth>
    );
  }
};

export default Profile;
