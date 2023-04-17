import { BiUserCircle, BiBody } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCalendarMinusFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

function Appointments() {
  return (
    <div className="flex flex-col gap-4 px-4 py-2 rounded-xl shadow-2xl drop-shadow-lg dark:border-2 dark:border-gray-400 ">
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
  return (
    <>
      <main className="font-poppins max-w-7xl mx-auto px-4 ">
        <h1 className="font-semibold md:text-4xl  md:leading-relaxed">
          Good Morning, <br />
          Paul 👋
        </h1>
        <section className="my-10 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-3">
            <h2 className="font-medium text-center">Medical Profile </h2>
            <Link to={"/edit"}>
              <FiEdit2 />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center content-center w-fit mx-auto gap-8">
            <div className="flex flex-col shadow-md w-fit py-4 px-4 rounded-md text-sm md:text-base dark:border-2 dark:border-gray-500">
              <div className="flex items-center gap-3">
                <h3>Weight</h3>

                <BiBody />
              </div>
              <span>23KG</span>
            </div>
            <div className="flex flex-col shadow-md w-fit py-4 px-4 rounded-md text-sm md:text-base dark:border-2 dark:border-gray-500">
              <div className="flex items-center gap-3">
                <h3>Weight</h3>
                <BiBody />
              </div>
              <span>23KG</span>
            </div>
            <div className="flex flex-col shadow-md w-fit py-4 px-4 rounded-md text-sm md:text-base dark:border-2 dark:border-gray-500">
              <div className="flex items-center gap-3">
                <h3>Weight</h3>
                <BiBody />
              </div>
              <span>23KG</span>
            </div>
            <div className="flex flex-col shadow-md w-fit py-4 px-4 rounded-md text-sm md:text-base dark:border-2 dark:border-gray-500">
              <div className="flex items-center gap-3">
                <h3>Weight</h3>
                <BiBody />
              </div>
              <span>23KG</span>
            </div>
          </div>
        </section>
        <section className="my-10 flex flex-col gap-4">
          <h2 className="font-medium text-center">My Appointments </h2>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Appointments />
            <Appointments />
            <Appointments />
            <Appointments />
            <Appointments />
            <Appointments />
          </section>
        </section>
        <section className="text-center">
          <h1>Medical History</h1>
          <p>You have no medical history</p>
        </section>
      </main>
    </>
  );
};

export default Profile;
