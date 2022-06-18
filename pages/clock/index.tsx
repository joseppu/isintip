import React from "react";
import Clock from 'react-live-clock';
const pagee = () => {
  return (
    <div>
      {" "}
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
    </div>
  );
};

export default pagee;
