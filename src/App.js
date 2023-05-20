import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import WebsiteVisitsCounter from './WebsiteVisitsCounter';
import './App.css';
import Autrice from'./Autrice';

function App() {
  const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
  return (
    <>
    <Navbar/>
    <section>{proPic}<Autrice/></section>
    <div className='stats'><WebsiteVisitsCounter startingCount={451607} todayVisits={100} last30DaysVisits={5000}></WebsiteVisitsCounter></div>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
