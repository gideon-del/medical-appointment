import React, { useEffect, useRef, useState } from "react";
import { HiPrinter } from "react-icons/hi";
function AppointmentConfirmation({ appointment }) {
  const [showSlip, setShowSlip] = useState(true);
  const [showDownloadButton, setShowDownloadButton] = useState(true);
  const downloadRef = useRef(null);

  const handleDownload = () => {
    // setShowSlip(true);
    setShowDownloadButton(false);
  };
  useEffect(() => {
    if (!showSlip) {
      return;
    }

    const handlePrint = () => {
      window.print();
      setShowSlip(false);
      setShowDownloadButton(true);
    };

    const downloadNode = downloadRef.current;
    console.log(downloadNode);
    downloadNode.addEventListener("click", handlePrint);
    return () => downloadNode.removeEventListener("click", handlePrint);
  }, [showSlip]);
  // useEffect(() => {
  //   const downloadNode = document.getElementById("download");
  //   console.log(downloadNode);
  //   if (downloadNode) {
  //     downloadNode.addEventListener("click", handlePrint);
  //   }
  //   return () => {
  //     if (downloadNode) {
  //       downloadNode.removeEventListener("click", handlePrint);
  //     }
  //   };
  // }, []);

  return (
    <section>
      <div className="flex max-w-7xl mx-auto justify-center px-6 items-center">
        <h1 className="font-bold text-red-400 text-[100px]">PP</h1>
      </div>
      <div className="flex mx-10">
        {showSlip && (
          <div>
            <h2>Appointment Confirmation Slip</h2>
            <div>
              <h3>Patient Name:</h3>
              <p>{appointment.patientName}</p>
              <h3>Doctor Name:</h3>
              <p>{appointment.doctorName}</p>
              <h3>Date:</h3>
              <p>{appointment.date}</p>
              <h3>Time:</h3>
              <p>{appointment.time}</p>
              <h3>Location:</h3>
              <p>{appointment.location}</p>
            </div>
          </div>
        )}
      </div>
      {showDownloadButton && (
        <button
          ref={downloadRef}
          id="download"
          onClick={handleDownload}
          className="flex justify-center w- bg-[#0E63F4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full focus:outline-none focus:shadow-outline items-center gap-2">
          Download Confirmation Slip
          <HiPrinter />
        </button>
      )}
    </section>
  );
}

export default AppointmentConfirmation;
