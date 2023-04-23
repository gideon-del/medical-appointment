import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import { AuthContext } from "../store/AuthContext";
import AppoinmentCard from "../components/AppointmentCard";
import AppointmentSlip from "../components/AppointmentSlip";

  function capitalizeWord(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedStr = capitalizedWords.join(" ");
    
    return capitalizedStr;
  }
  function dateToUnix(dateString) {
    const dateObj = new Date(dateString);
    const unixTimestamp = Math.floor(dateObj.getTime() / 1000);
    
    return unixTimestamp;
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
  const [ appointmentType, setAppointmentType ] = useState("Upcoming Appoinments")
  const location = useLocation();
  const currentDateUnix = Math.floor(Date.now() / 1000)
  convertUnixTimestamp(profile?.dateOfBirth.seconds)
  if (!loading && !profile) {
    return <Navigate to="/edit" state={{ from: location }} replace />;
  } else {
    return (
      <RequireAuth>
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
                  <h4 className="text-5xl font-bold text-black mx-auto px-6 w-max border border-t-black">
                    {appointments.filter(appointment => dateToUnix(appointment.date) > currentDateUnix).length}
                  </h4>
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
                    <p className="mt-1 mb-1.5 font-semibold text-black truncate">{capitalizeWord(profile?.maritalStatus)}</p>
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
                <AppointmentSlip />
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-2xl text-black p-7">
            <div className="flex flex-col mx-auto md:flex-row md:justify-between">
              <div className="bg-gray-300 p-1.5 rounded-2xl w-full md:w-max">
                {["Upcoming Appoinments", "Past Appoinments"].map(type => {
                  return (
                  <button 
                    key={type}
                    onClick={() => setAppointmentType(type)}
                    className={`w-full md:w-max md:mx-2.5 rounded-2xl font-semibold px-5 py-3
                    ${appointmentType === type? "bg-white text-blue-500": "text-gray-600"}`}>
                      {type}
                  </button>)
                })}
              </div>
              <Link to="/hospital">
                <button className="w-full mt-5 md:mt-0 md:w-max basis-1 bg-blue-500 hover:bg-blue-700 px-5 py-3 text-white font-semibold rounded-2xl">
                  Make Appointment
                </button>
              </Link>
            </div>
            <div className="bg-gray-300 px-5 py-0.5 mt-6 rounded-2xl">
              { appointments.length > 0 ? appointments.map(appointment => {
                if (appointmentType === "Upcoming Appoinments" && currentDateUnix < dateToUnix(appointment.date)) {
                  return (<AppoinmentCard 
                    date={convertUnixTimestamp(dateToUnix(appointment.date))}
                    time={appointment.time}
                    hospital={appointment.hospital}
                    department={capitalizeWord(appointment.department)}
                    address={appointment.address}
                  />)}})
                :<div className="text-center py-4">
                  <h4 className="font-semibold">Nothing to show here.</h4>
                </div>}
                {appointments.length > 0 && appointments.map(appointment => {
                if (appointmentType === "Past Appoinments" && currentDateUnix > dateToUnix(appointment.date)) {
                  return (<AppoinmentCard 
                    date={convertUnixTimestamp(dateToUnix(appointment.date))}
                    time={appointment.time}
                    hospital={appointment.hospital}
                    department={capitalizeWord(appointment.department)}
                    address={appointment.address}
                  />)}})}
            </div>
          </div>
        </main>
      </RequireAuth>
    );
  }
};

export default Profile;
