import Navbar from "../components/Navbar";
import React from "react";
import { renders } from "@testing-library/react";
import { ReactDOM } from "react";
import WebsiteVisitsCounter from "./WebsiteVisitsCounter";

function Copioni (){
    const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
    return(
        <>
        <Navbar/>
        {proPic}
        </>
    );
};











ReactDOM.render(<Testo/>, document.getElementById("root"));

export default Copioni;