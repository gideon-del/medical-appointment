import React from "react";

export default function AppoinmentCard({ date, time, hospital, department, address }) {
    return (
        <div className="flex flex-wrap bg-white rounded-2xl py-2 md:px-4">
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/4 lg:border-r lg:border-r-gray-400 px-5 lg:px-10 md:my-auto">
                <h4 className="text-2xl font-semibold truncate">{date}</h4>
                <p className="text-gray-400">{time}</p>
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/4 lg:border-r lg:border-r-gray-400 px-5 lg:px-10">
                <h4 className="text-2xl font-medium text-gray-400 ">Hospital</h4>
                <p className="truncate font-semibold">{hospital}</p>
            </div>
            <div className="mt-5 md:my-auto w-full md:w-1/2 lg:w-1/4 lg:border-r lg:border-r-gray-400 px-5 lg:px-10">
                <h4 className="text-2xl font-medium text-gray-400 ">Department</h4>
                <p className="truncate font-semibold">{department}</p>
            </div>
            <div className="mt-5 mb-5 md:mt-0 w-full md:w-1/2 lg:w-1/4 px-5 lg:px-10">
                <h4 className="text-2xl font-medium text-gray-400 ">Address</h4>
                <p className="font-semibold">{address}</p>
            </div>
        </div>
    )
}