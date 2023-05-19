import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import Navbar from './Navbar';



function App() {
  const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
  return (
    <>
    <Navbar/>
    {proPic}
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
