import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import WebsiteVisitsCounter from "./WebsiteVisitsCounter";

function Incontri() {
  const proPic = (
    <img
      src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg"
      alt="Profile Picture"
      className="imm"
    ></img>
  );
  return (
    <>
      <Navbar />
      {proPic}
    </>
  );
}

ReactDOM.render(<Incontri />, document.getElementById("root"));

export default Incontri;
