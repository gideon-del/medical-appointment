import { useMemo } from "react";
import { useAuth } from "../store/AuthContext"

const useAppointment = () => {
    const {appointments} = useAuth()
    const upcoming = useMemo(() => {
        return appointments.length > 0
          ? appointments.filter((app) => new Date(app.date) > new Date())
          : [];
      }, [appointments]);
    const past = useMemo(() => {
        return appointments.length > 0
          ? appointments.filter((app) => new Date(app.date) < new Date())
          : [];
      }, [appointments]);
      
    return {past,upcoming}
}

export default useAppointment