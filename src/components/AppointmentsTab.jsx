import React, { useMemo, useState } from "react";

const AppointmentsTab = () => {
  const tab = useMemo(() => ["Upcoming", "Past"]);
  const [activeTab, setActiveTab] = useState("upcoming");
  const toggleTab = (tab) => {
    setActiveTab(tab.toLowerCase());
  };
  return (
    <section className="bg-white">
      <nav className="w-fit bg-gray-600">
        <ul className="flex p-4 w-fit">
          {tab.map((cur) => (
            <li
              className={`${
                cur.toLowerCase() === activeTab
                  ? "bg-white text-blue-600 rounded-md"
                  : "text-slate-700 bg-transparent"
              } py-2 px-6 text-center capitalize`}
              key={cur}
            >
              {cur} appointments{" "}
            </li>
          ))}
        </ul>
      </nav>
      <section className="bg-gray-600">
        <section className="bg-white rounded-md px-8 py-4 flex flex-col md:flex-row flex-wrap">
          <section>
            <p className="text-black font-bold text-xl flex flex-col">
              {" "}
              01 Jun 20 <span className="text-gray-500">09:00 AM</span>
            </p>
          </section>
          <section>
            <p className="text-gray-600 font-medium">
              Hospital <span>Hospital Name</span>
            </p>
          </section>
          <section>
            <p className="text-gray-600 font-medium">
              Department{" "}
              <span className="text-black font-bold text-lg"> Cardiology</span>
            </p>
          </section>
          <section>
            <p className="text-gray-600 font-medium">
              Doctor{" "}
              <span className="text-black font-bold text-lg">
                {" "}
                Dr. Arkandy Ch.
              </span>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AppointmentsTab;
