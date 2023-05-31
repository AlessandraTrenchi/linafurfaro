import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Link } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';
import Teatro from './components/Teatro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/teatro" component={Teatro} /> 
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//The Teatro component is set as the component for the "/teatro" route.
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
