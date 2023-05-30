import Navbar from "../components/Navbar";
import React from "react";
import { ReactDOM } from "react";
import WebsiteVisitsCounter from "./WebsiteVisitsCounter";

function Problemi (){
    const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
    return(
        <>
        <Navbar/>
        {proPic}
        </>
    );
};











ReactDOM.render(<Problemi/>, document.getElementById("root"));

export default Incontri;