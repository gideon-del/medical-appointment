import React from 'react';
import Logo from "../assets/logo-light.png"

const AppointmentSlip = ({ date, time, name, email, phone, department, hospital, address, link, componentRef }) => {
  return (
    <div className="p-14 font-workSans" ref={componentRef}>
      <img src={Logo} alt="Logo" className='h-14' />
      <div className="flex">
        <div className="ml-auto">
            <h4 className="text-xl font-semibold">
                Date: <span className="font-medium text-gray-500 text-lg">{date}</span>
            </h4>
            <h4 className="text-xl font-semibold">
                Time: <span className="font-medium text-gray-500 text-lg">{time}</span>
            </h4>
        </div>
      </div>
      <h4 className='text-center text-4xl font-black mt-10'>Appointment Slip</h4>
      <div className="mt-8">
        <h4 className="text-3xl font-bold">Name:</h4>
        <p className="mt-1 text-gray-500 text-xl font-semibold">{name}</p>
      </div>
      <div className="mt-8">
        <h4 className="text-3xl font-bold">Email:</h4>
        <p className="mt-1 text-gray-500 text-xl font-semibold">{email}</p>
      </div>    
      <div className="mt-8">
        <h4 className="text-3xl font-bold">Phone:</h4>
        <p className="mt-1 text-gray-500 text-xl font-semibold">{phone}</p>
      </div>
      <div className="mt-8">
        <h4 className="text-3xl font-bold">Department:</h4>
        <p className="mt-1 text-gray-500 text-xl font-semibold">{department}</p>
      </div>
        <div className="mt-8">
            <h4 className="text-3xl font-bold">Hospital:</h4>
            <p className="mt-1 text-gray-500 text-xl font-semibold">{hospital}</p>
        </div>
        <div className="mt-8">
            <h4 className="text-3xl font-bold">Hospital Address:</h4>
            <a href={link} className="mt-1 text-gray-500 text-xl font-semibold hover:text-gray-700">{address}</a>
        </div>
    </div>
  );
};

export default AppointmentSlip;