import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import WebsiteVisitsCounter from './WebsiteVisitsCounter';
import './App.css';
import Autrice from './Autrice';

function App() {
  const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
  const proPic2 = <img src="https://i0.wp.com/www.linafurfaro.it/wp-content/uploads/2016/07/fiera-piu-libri-piu-liberi1.jpg?w=403&ssl=1" alt="Profile Picture" className='imm'></img>;

  return (
    <>
    <Navbar/>
    <section>
      {proPic2} 
      <div>
      <Autrice/>
      </div>
      </section>
    <div className='stats'><WebsiteVisitsCounter startingCount={451607} todayVisits={100} last30DaysVisits={5000}></WebsiteVisitsCounter></div>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
