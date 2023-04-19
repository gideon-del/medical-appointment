import React from "react";
import Services from "../components/Services";
import hero from "../assets/hero.svg";
import doc1 from "../assets/doc1.svg";
import doc2 from "../assets/doc2.svg";
import appointment from "../assets/appointment.svg";
import icon from "../assets/icon.svg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="w-full bg-slate-200 font-poppins">
        <div className="flex  px-10 py-20 md:px-20 md:py-24 gap-14 ">
          <div className="text-center text-[#0A1634] py-48 md:w-7/12 md:py-32 ">
            <h1 className="text-4xl md:text-6xl ">Schedule Your</h1>
            <h1 className="text-4xl md:text-6xl ">Appointment</h1>
            <h1 className="text-4xl md:text-6xl pb-4">Now</h1>
            <p className="text-xl">Revitalize your health with our easy </p>
            <p className=" text-xl pb-4"> online appointments!</p>
            <button className="py-4 px-8 w-38 bg-[#0E63F4] text-slate-100 rounded-lg items-center">
              Appointment
            </button>
          </div>
          <div className="hidden md:block w-full md:max-h-screen ">
            <img src={hero} alt="hero" className=" w-[80%] " />
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full ">
          <Services />

          <div className="flex flex-col-reverse lg:flex lg:flex-row gap-2 min-h-screen  px-10 md:gap-14 md:px-20 ">
            <div className=" text-center lg:text-left md:w-[70%]">
              <h1 className="text-[#0E63F4] text-2xl   md:py-8 md:px-4">
                Find Doctors
              </h1>
              <h1 className=" text-[#162D63] text-xl md:text-4xl px-4 ">
                Consult a doctor anytime,
              </h1>
              <h1 className=" text-[#162D63] text-xl md:text-4xl px-4">
                anywhere by search
              </h1>
              <p className=" text-[#7E87A1] py-4 px-2 md:py-8 md:px-4">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor.
              </p>
              <div className=" flex py-5">
                <img src={icon} alt={icon} />

                <p className="text-[#162D63] text-2xl md:text-3xl my-auto px-3">
                  PP is healthcare, but easy
                </p>
              </div>
              <div className="flex">
                <img src={icon} alt={icon} />
                <p className=" text-[#162D63] text-2xl md:text-3xl my-auto px-3 ">
                  Top searched specialty
                </p>
              </div>

              <button className=" rounded-tr-2xl rounded-b-2xl my-4 mx-4 py-3 px-8 w-38 bg-[#0E63F4] text-slate-100  items-center">
                See Specialist
              </button>
            </div>
            <div className="w-full">
              <img src={doc1} alt="doc1" className=" object-cover w-full" />
            </div>
          </div>
          <div className="lg:flex gap-2 min-h-screen px-10 md:gap-14 md:px-20 ">
            <div className=" md:block w-full md:max-h-screen ">
              <img
                src={appointment}
                alt="appointment"
                className=" object-cover w-full"
              />
            </div>
            <div className=" text-center md:w-[70%] ">
              <h1 className="text-[#0E63F4] text-2xl md:py-8 md:px-4">
                BOOK AN APPOINTMENT
              </h1>
              <h1 className="text-[#162D63] text-2xl pt-4 md:text-4xl md:px-4">
                Book an appointment,
              </h1>
              <h1 className="text-[#162D63] text-2xl pb-4 md:text-4xl md:px-4">
                today, online
              </h1>
              <p className=" text-[#7E87A1] text-lg py-8 px-4">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor.
              </p>
              <div className=" flex py-5 items-center">
                <img src={icon} alt="" icon />
                <p className="text-[#162D63] text-2xl md:text-3xl px-4">
                  PP is healthcare, but easy
                </p>
              </div>
              <div className="flex">
                <img src={icon} alt="icon" />
                <p className="text-[#162D63] text-2xl md:text-3xl px-4 ">
                  Top searched specialty
                </p>
              </div>

              <button className=" rounded-tr-2xl rounded-b-2xl my-4 mx-4 py-3 px-8 w-38 bg-[#0E63F4] text-slate-100 text-center items-center">
                See Availability
              </button>
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-full items-center ">
            <div className=" h-98 text-center md:mx-28 md:my-16">
              <h1 className="text-[#071A48] text-3xl font-bold md:text-6xl py-2">
                We are an employee benefit at
              </h1>
              <h1 className="text-[#071A48] text-3xl font-bold md:text-6xl py-2">
                7000+ companies
              </h1>
              <div className="gap-8 py-8 justify-around lg:flex lg:gap-12 items-center md:my-16">
                <div className=" my-8 text-[#000000] bg-[#FFF7EA] rounded-tr-2xl rounded-b-2xl px-auto py-8 w-72 h-68">
                  <p className=" font-bold text-3xl">850</p>
                  <p className="font-medium">Verified Physicians</p>
                  <p className="text-[#7E87A1]">Highly Verified</p>
                </div>
                <div className="my-8 text-[#000000] bg-[#ECF9FF] rounded-tr-2xl rounded-b-2xl px-8 py-8 w-72 h-68">
                  <p className="font-bold text-3xl">300+</p>
                  <p className="font-medium">Happy Customers</p>
                  <p className="text-[#7E87A1]">Get their treatment</p>
                </div>
                <div className="my-8 text-[#000000] bg-[#FFF1F1] rounded-tr-2xl rounded-b-2xl  px-8 py-8 w-72 h-68">
                  <p className="font-bold text-3xl">98.4%</p>
                  <p className="font-medium">Positive Feedbacks</p>
                  <p className="text-[#7E87A1]">From our customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-36 flex px-10 py-8 bg-[#ECF3FF] md:px-20 ">
            <div className="flex flex-col md:w-[100%] py-12  lg:py-52">
              <h1 className="text-[#000000] text-center text-2xl mb-4 ">
                Get started with PP today Book Appointment
              </h1>
              <button className="py-4 mx-auto w-[80%] lg:w-[60%] bg-[#0E63F4] text-slate-100 rounded-lg text-center items-center ">
                Book Appointment
              </button>
            </div>
            <div className="hidden md:block w-full md:max-h-screen ">
              <img src={doc2} alt="doc2" className=" " />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
