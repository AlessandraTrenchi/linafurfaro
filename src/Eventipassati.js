import Navbar from "./Navbar";
import React from "react";
import { ReactDOM } from "react";

function Eventipassati (){
    const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
    return(
        <>
        <Navbar/>
        {proPic}
        </>
    );
};











ReactDOM.render(<Eventipassati/>, document.getElementById("root"));

export default Eventipassati;