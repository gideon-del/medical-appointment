import React, { useContext } from "react";
import Map from "../components/Map";
import RequireAuth from "../components/RequireAuth";
import { AuthContext } from "../store/AuthContext";
import { validateAppoint } from "../lib/validation";
import { taoster } from "../lib/toaster";
import { Navigate, useLocation } from "react-router-dom";

const Hospital = () => {
  const { appointments } = useContext(AuthContext);
  const location = useLocation();
  if (appointments.length > 0) {
    let canMakeAppointMent = validateAppoint(
      appointments[appointments.length - 1]
    );
    if (!canMakeAppointMent) {
      taoster({
        state: "warning",
        message: "You  must wait 15 Minute to make another appointment",
      });
      return <Navigate to="/profile" state={{ from: location }} replace />;
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
