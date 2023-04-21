import { BiUserCircle, BiBody } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCalendarMinusFill, BsGenderAmbiguous } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { MdBloodtype } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { useContext, useMemo } from "react";
import { AuthContext } from "../store/AuthContext";
import RequireAuth from "../components/RequireAuth";
import AppoinmentCard from "../components/AppointmentCard";

function Appointments() {
  return (
    <div className="flex flex-col gap-4 px-4 py-2 rounded-xl shadow-md  dark:border-2 dark:border-gray-400 ">
      <div className="flex gap-8 items-center justify-between">
        <div className="text-2xl">
          <BiUserCircle />
        </div>
        <h3 className="text-sm">
          Dr Gideon Chidi <br /> <span>Optician</span>
        </h3>
        <div className="flex gap-2 items-center text-xs">
          <AiTwotoneStar />
          <span>5.0</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center text-xs md:text-base">
          <BsCalendarMinusFill />
          <span>15 May</span>
        </div>
        <time className="text-xs">11:00AM - 12:00PM</time>
        <button className="px-2 py-2 rounded-md text-xs">View Details</button>
      </div>
    </div>
  );
}
  function convertUnixTimestamp(unixTimestamp) {
    const dateObj = new Date(unixTimestamp * 1000);
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const day = dateObj.toLocaleString('default', { day: 'numeric' });
    const year = dateObj.toLocaleString('default', { year: 'numeric' });
    const suffix = getOrdinalSuffix(day);
    return `${month} ${day}${suffix}, ${year}`;
  }

  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    } else {
      const lastDigit = day % 10;
      switch (lastDigit) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }
  } 
const Profile = () => {
  const { profile, loading, appointments } = useContext(AuthContext);
   
  const profileIcons = useMemo(
    () => ({
      height: <GiBodyHeight />,
      weight: <BiBody />,
      gender: <BsGenderAmbiguous />,
      bloodGroup: <MdBloodtype />,
    }),
    []
  );
  const location = useLocation();
  if (!loading && !profile) {
    return <Navigate to="/edit" state={{ from: location }} replace />;
  } else {
    return (
      <RequireAuth>
        {/* <main className="font-poppins mx-auto px-4 bg-[#E2E8F0]">
          <h1 className="font-semibold md:text-4xl  md:leading-relaxed">
            Good Morning, <br />
            {profile?.name} 👋
          </h1>
          <section className="my-10 flex flex-col gap-4">
            <div className="flex items-center justify-center gap-3">
              <h2 className="font-medium text-center">Medical Profile </h2>
              <Link to={"/edit"}>
                <FiEdit2 />
              </Link>
            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-4 items-center justify-center content-center w-fit mx-auto gap-8">
              {Object.keys(profileIcons).map((icon) => (
                <div
                  className="flex flex-col shadow-md w-fit py-4 px-4 rounded-md text-sm md:text-base dark:border-2 dark:border-gray-500"
                  key={icon}
                >
                  <div className="flex items-center gap-3 ">
                    <h3 className="capitalize">{icon}</h3>

                    {profileIcons[icon]}
                  </div>
                  <span>{profile[icon]}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="my-10 flex flex-col gap-4">
            <h2 className="font-medium text-center">My Appointments </h2>
            {appointments.length > 0 ? (
              <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                <Appointments />
              </section>
            ) : (
              <p className="text-center">You have no current appointments</p>
            )}
            <Link to="/book-appointment" className="mx-auto">
              <button className="bg-blue-800 rounded-md py-3 px-4 text-sm w-fit mx-auto md:text-base">
                Book Appointment
              </button>
            </Link>
          </section>
          <section className="text-center">
            <h1>Medical History</h1>
            <p>You have no medical history</p>
          </section>
        </main> */}
        <main className="bg-[#E2E8F0] py-5 md:py-10 lg:py-14 px-5 md:px-14 lg:px-20 font-workSans">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-2/3 bg-white rounded-2xl p-5 lg:p-8">
              <div className="flex justify-between">
                <h4 className="text-black text-2xl font-bold text-black">Profile</h4>
                <Link to="/edit">
                  <div className="flex bg-gray-300 hover:bg-gray-400 my-auto px-6 py-2 rounded-2xl font-semibold gap-2 tracking-tight">
                    <FaEdit className="my-auto" />
                    Edit<span className="hidden sm:block">Profile</span>
                  </div>
                </Link>
              </div>
              <div className="md:flex mt-5">
                <div className="w-full md:w-2/5 text-center">
                  <img src="https://leadership.ng/wp-content/uploads/2023/03/davido.png" alt="Profile Icon" className="w-24 h-24 rounded-full mx-auto" />
                  <h4 className="text-2xl font-bold text-black truncate mt-2">{profile?.name}</h4>
                  <p className="text-gray-500 mt-2 truncate">{profile?.email}</p>
                  <h4 className="text-lg text-black font-bold mt-4 font-poppins">Appointments</h4>
                  <h4 className="text-5xl font-bold text-black mx-auto px-6 w-max border border-t-black">{appointments?.length}</h4>
                  <p className="text-gray-400">Upcoming</p>
                </div>
                <div className="grid grid-cols-2 gap-5 px-6 w-full md:w-3/5 mt-5 md:mt-0 md:border-l md:border-gray-500">
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Gender</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.gender}</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Birthday</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{convertUnixTimestamp(profile?.dateOfBirth.seconds)}</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Phone Number</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.phoneNumber}</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Marital Status</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.maritalStatus}</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Blood Group</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.bloodGroup}</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">State</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.address}</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Height</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.heigth} cm</p>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-gray-500">Weight</h4>
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{profile?.weigth} kg</p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-5">
              <h4 className="text-black text-2xl font-bold text-black">Payments</h4>
              <div className="flex items-center justify-center text-black h-72 text-3xl font-bold">
                Coming Soon
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-2xl text-black p-7">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="bg-gray-300 p-1.5 rounded-2xl w-full md:w-max">
                <button className="w-full md:w-max rounded-2xl font-semibold px-5 py-3 bg-white text-blue-500">
                  Upcoming Appoinments
                </button>
                <button className="w-full md:w-max ml-5 rounded-2xl text-gray-600 font-semibold px-5 py-3">
                  Past Appoinments
                </button>
              </div>
              <Link to="/book-appointment">
                <button className="w-full mt-5 md:mt-0 md:w-max basis-1 bg-blue-500 hover:bg-blue-700 px-5 py-3 text-white font-semibold rounded-2xl">
                  Make Appointment
                </button>
              </Link>
            </div>
            <div className="bg-gray-300 px-5 py-0.5 mt-6 rounded-2xl">
              <AppoinmentCard date="April 30th 2023" time="9:30 PM" hospital="National Hospital Abuja" department="Urology" address="179 Akin Adesola, Kofo Abayomi St, Victoria Island, Lagos" />
            </div>
          </div>
        </main>
      </RequireAuth>
    );
  }
};

export default Profile;
