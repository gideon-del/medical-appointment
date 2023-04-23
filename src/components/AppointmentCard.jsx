import React from "react";
import AppointmentSlip from "../components/AppointmentSlip"

export default function AppoinmentCard({ date, time, hospital, department, address, link }) {

    return (
        <div className="flex flex-wrap bg-white rounded-2xl py-2 md:px-4 my-6 md:h-48">
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/4 lg:border-r lg:border-r-gray-400 px-5 lg:px-10 md:my-auto">
                <h4 className="text-xl font-semibold">{date}</h4>
                <p className="text-gray-400 font-medium">{time}</p>
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/4 lg:border-r lg:border-r-gray-400 px-5 lg:px-10">
                <h4 className="text-xl font-semibold">Hospital</h4>
                <p className="text-gray-400 font-medium">{hospital}</p>
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/4 lg:border-r lg:border-r-gray-400 px-5 lg:px-10">
                <h4 className="text-xl font-semibold">Department</h4>
                <p className="text-gray-400 font-mmedium">{department}</p>
            </div>
            <div className="mt-5 mb-5 md:my-auto w-full md:w-1/2 lg:w-1/4 px-5 lg:px-10">
                <h4 className="text-xl font-medium font-semibold">Address</h4>
                <a href={link} target="_blank" className="text-gray-400 font-medium hover:text-gray-700">{address}</a>
            </div>
            <div>
                
            </div>
        </div>
    )
}