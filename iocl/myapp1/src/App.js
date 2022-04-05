import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation.js';
import Home from './components/welcome.js';
import Registration from './components/registration.js';
import Login_success from './components/login_success.js';
import Test from './components/validation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Route path="/" component={Test}/> */}
      <Router>
        <Route path="/" component={Navigation} />
        <Route path="/welcome" component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/login_success" component={Login_success} />
      </Router>

    </div>

  );
}

export default App;
