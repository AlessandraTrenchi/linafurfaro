import Navbar from "../components/Navbar";
import React from "react";
import { ReactDOM } from "react";
import WebsiteVisitsCounter from "./WebsiteVisitsCounter";
function Tempinuovi (){
    const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
    return(
        <>
        <Navbar/>
        {proPic}
        </>
    );
};











ReactDOM.render(<Tempinuovi/>, document.getElementById("root"));

export default Tempinuovi;