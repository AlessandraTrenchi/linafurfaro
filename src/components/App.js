import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../styles/index.css";
import Navbar from '../components/Navbar';
import WebsiteVisitsCounter from '../components/WebsiteVisitsCounter';
import '../styles/App.css';
import Autrice from '../components/Autrice';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  const proPic = <img src="https://pbs.twimg.com/profile_images/768896426038423552/nGiJamXP_400x400.jpg" alt="Profile Picture" className='imm'></img>;
  const proPic2 = <img src="https://i0.wp.com/www.linafurfaro.it/wp-content/uploads/2016/07/fiera-piu-libri-piu-liberi1.jpg?w=403&ssl=1" alt="Profile Picture" className='imm'></img>;

  return (
    <Router>
      <Navbar />
      <section>
        {proPic2}
        <div>
          <Autrice />
        </div>
      </section>
      <div className='stats'>
        <WebsiteVisitsCounter startingCount={451607} todayVisits={100} last30DaysVisits={5000} />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
