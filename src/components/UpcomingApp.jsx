import React from "react";
import { useAuth } from "../store/AuthContext";
import useAppointment from "../hooks/useAppointments";
import AppoinmentCard from "./AppointmentCard";
import {
  capitalizeWords,
  convertUnixTimestamp,
  dateToUnix,
} from "../lib/converters";

const UpcomingApp = () => {
  const { upcoming } = useAppointment();
  return upcoming.length > 0 ? (
    upcoming.map((appointment) => {
      return (
        <AppoinmentCard
          date={convertUnixTimestamp(dateToUnix(appointment.date))}
          time={appointment.time}
          hospital={appointment.hospital}
          department={capitalizeWords(appointment.department)}
          address={appointment.address}
          link={appointment.link}
          key={appointment.createdAtDate}
        />
      );
    })
  ) : (
    <div className="text-center py-4">
      <h4 className="font-semibold">Nothing to show here.</h4>
    </div>
  );
};

export default UpcomingApp;
