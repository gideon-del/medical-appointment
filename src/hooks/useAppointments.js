import { useMemo } from "react";
import { useAuth } from "../store/AuthContext"

const useAppointment = () => {
    const {appointments} = useAuth()
    const upcoming = useMemo(() => {
        return appointments.length > 0
          ? appointments.filter((app) => new Date(app.createdAtDate) > Date.now())
          : [];
      }, [appointments]);
    const past = useMemo(() => {
        return appointments.length > 0
          ? appointments.filter((app) => new Date(app.createdAtDate) < Date.now())
          : [];
      }, [appointments]);
    return {past,upcoming}
}

export default useAppointment