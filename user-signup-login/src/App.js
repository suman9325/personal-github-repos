import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Login from './components/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={Welcome}></Route>
          <Route path='/signup' component={Signup}></Route>
          <Route path='/login' component={Login}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
