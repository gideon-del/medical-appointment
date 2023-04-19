import React from "react";
import Map from "../components/Map";
import RequireAuth from "../components/RequireAuth";

const Hospital = () => {
  return (
    <RequireAuth>
      <div>
        <Map />
        <div>Hello</div>
      </div>
    </RequireAuth>
  );
};

export default Hospital;
