import { BiUserCircle, BiBody } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCalendarMinusFill, BsGenderAmbiguous } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { Link, Navigate, useLocation } from "react-router-dom";
import { MdBloodtype } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { useContext, useMemo } from "react";
import { AuthContext } from "../store/AuthContext";
import RequireAuth from "../components/RequireAuth";
import { humanize } from "humanize";

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

const Profile = () => {
  const { profile, loading, appointments } = useContext(AuthContext);
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
  
  console.log(profile)
  // console.log(humanize.date(profile.dateOfBirth.seconds))
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
        <main className="flex flex-col pt-5 pt-5 md:pt-10 lg:pt-20 px-5 md:px-14 lg:px-20 gap-10 bg-[#E2E8F0] h-screen font-workSans">
          <div className="w-full lg:w-2/3">
            <div className="md:flex bg-white rounded-2xl p-5 lg:p-8">
              <div className="w-full md:w-2/5 text-center">
                <img src="https://leadership.ng/wp-content/uploads/2023/03/davido.png" alt="Profile Icon" className="w-24 h-24 rounded-full mx-auto" />
                <h4 className="text-2xl font-bold text-black truncate mt-2">{profile?.name}</h4>
                <p className="text-gray-500 mt-2 truncate">{profile?.email}</p>
                <h4 className="text-lg text-black font-bold mt-4 font-poppins">Appointments</h4>
                <h4 className="text-5xl font-bold text-black mx-auto px-6 w-max border border-t-black">1</h4>
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
            <div className="bg-white rounded-2xl">
              <img src="" alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-white rounded-2xl">
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </main>
      </RequireAuth>
    );
  }
};

export default Profile;
