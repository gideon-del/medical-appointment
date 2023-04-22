import React, { useMemo } from "react";

const ProfileCard = ({
  email,
  name,
  img,
  pastAppointments,
  upcomingAppointmenst,
  profs,
}) => {
  const filteredProfs = useMemo(() => {
    const notIncluded = ["email", "name", "img"];
    return Object.keys(profs).filter((item) => notIncluded.includes(item));
  }, [profs]);
  return (
    <section>
      <div className="max-w-7xl bg-white shadow-md rounded-md px-4 py-8 mx-auto">
        <div>
          <div>
            <img
              src={img}
              alt={name}
              className="aspect-square rounded-full max-w-xs w-3/5"
            />
          </div>
          <h2 className="text-black font-bold capitalize">{name}</h2>
          <p className="text-gray-700">{email}</p>
          <div>
            <h3 className="text-black">Appointments</h3>
            <div>
              <p>
                {pastAppointments || 0}{" "}
                <span className="text-gray-700">Past</span>
              </p>
              <p>
                {upcomingAppointmenst || 0}{" "}
                <span className="text-gray-700">Upcoming</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-col-2">
          {filteredProfs.map((prof) => (
            <div className="flex flex-col w-fit gap-4" key={prof}>
              <p className="text-gray-700 font-medium capitalize">{prof}</p>
              <p className="text-black">{profs[prof]}</p>
              <hr className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
