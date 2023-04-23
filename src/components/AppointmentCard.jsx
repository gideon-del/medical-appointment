import React, { useContext, useRef } from "react";
import AppointmentSlip from "../components/AppointmentSlip"
import { useReactToPrint } from 'react-to-print';
import { BiDownload } from "react-icons/bi"
import { AuthContext } from "../store/AuthContext";

export default function AppoinmentCard({ date, time, hospital, department, address, link }) {
    const { profile } = useContext(AuthContext)
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div className="flex flex-wrap bg-white rounded-2xl py-2 md:px-4 my-6 md:h-48">
            <div 
                className="hidden lg:block cursor-pointer lg:border-r lg:border-r-gray-400 px-5 lg:px-10 md:my-auto"s
                onClick={handlePrint}
            >
                <BiDownload
                    size="30px"
                    className="hover:text-gray-500"
                />
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/5 lg:border-r lg:border-r-gray-400 px-5 lg:px-10 md:my-auto">
                <h4 className="text-xl font-semibold">{date}</h4>
                <p className="text-gray-400 font-medium">{time}</p>
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/5 lg:border-r lg:border-r-gray-400 px-5 lg:px-10">
                <h4 className="text-xl font-semibold">Hospital</h4>
                <p className="text-gray-400 font-medium">{hospital}</p>
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/5 lg:border-r lg:border-r-gray-400 px-5 lg:px-10">
                <h4 className="text-xl font-semibold">Department</h4>
                <p className="text-gray-400 font-mmedium">{department}</p>
            </div>
            <div className="mt-5 mb-5 md:my-auto w-full md:w-1/2 lg:w-1/5 px-5 lg:px-10">
                <h4 className="text-xl font-medium font-semibold">Address</h4>
                <a href={link} target="_blank" className="text-gray-400 font-medium hover:text-gray-700">{address}</a>
            </div>
            <div class="opacity-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg h-0.5 w-0.5">
                <AppointmentSlip
                    name={profile.name}
                    email={profile.email}
                    phone={profile.phoneNumber}
                    date={date}
                    time={time}
                    hospital={hospital}
                    department={department}
                    address={address}
                    link={link}
                    componentRef={componentRef}
                />
            </div>
        </div>
    )
}