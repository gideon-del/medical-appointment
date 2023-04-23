import useAppointment from "../hooks/useAppointments";
import AppoinmentCard from "./AppointmentCard";
import {
  capitalizeWords,
  convertUnixTimestamp,
  dateToUnix,
} from "../lib/converters";

const PastApp = () => {
  const { past } = useAppointment();
  return past.length > 0 ? (
    past.map((appointment) => {
      return (
        <AppoinmentCard
          date={convertUnixTimestamp(dateToUnix(appointment.date))}
          time={appointment.time}
          hospital={appointment.hospital}
          department={capitalizeWords(appointment.department)}
          address={appointment.address}
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
export default PastApp;
