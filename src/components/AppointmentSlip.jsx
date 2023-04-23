import React from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';

const AppointmentSlip = ({ name, email, phone, hospitalName, hospitalAddress, specialist }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Hospital Name: ${hospitalName}`, 10, 40);
    doc.text(`Hospital Address: ${hospitalAddress}`, 10, 50);
    doc.text(`Specialist: ${specialist}`, 10, 60);
    doc.save('appointment_slip.pdf');
  };

  return (
    <div className="p-4 border rounded-md" ref={componentRef}>
      <h2 className="text-2xl font-semibold mb-4">Appointment Slip</h2>
      <div className="mb-4">
        <span className="font-semibold">Name:</span> {name}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Email:</span> {email}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Phone:</span> {phone}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Hospital Name:</span> {hospitalName}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Hospital Address:</span> {hospitalAddress}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Specialist:</span> {specialist}
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4" onClick={handlePrint}>
        Print
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={generatePDF}>
        Download PDF
      </button>
    </div>
  );
};

export default AppointmentSlip;