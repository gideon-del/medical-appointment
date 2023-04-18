import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black grid place-items-center z-[9999]">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
