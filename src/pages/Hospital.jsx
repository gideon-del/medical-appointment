import React, { useContext } from "react";
import Map from "../components/Map";
import RequireAuth from "../components/RequireAuth";
import { AuthContext } from "../store/AuthContext";
import { validateAppoint } from "../lib/validation";
import { taoster } from "../lib/toaster";

const Hospital = () => {
  const { appointments } = useContext(AuthContext);
  if (appointments.length > 0) {
    let canMakeAppointMent = validateAppoint(
      appointments[appointments.length - 1]
    );
    if (!canMakeAppointMent) {
      taoster({
        state: "error",
        message: "You  must wait 15 Minute to make another appointment",
      });
      return <Navigate to="/profile" />;
    }
  }
  return (
    <RequireAuth>
      <div>
        <Map />
      </div>
    </RequireAuth>
  );
};

export default Hospital;
