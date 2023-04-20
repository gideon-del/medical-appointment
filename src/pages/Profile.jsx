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
  const profileIcons = useMemo(
    () => ({
      heigth: <GiBodyHeight />,
      weigth: <BiBody />,
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
        <main className="font-poppins max-w-7xl mx-auto px-4 ">
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
        </main>
      </RequireAuth>
    );
  }
};

export default Profile;
