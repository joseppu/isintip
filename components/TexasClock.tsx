import React from "react";
import Clock from "react-live-clock";

const TexasClock = () => {
  return (
    <div className="self-center font-semibold text-gray-700">
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"America/Chicago"} />
      {" "}
      CDT
    </div>
  );
};

export default TexasClock;
