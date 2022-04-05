import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/application.css";

import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import MockAPI from './components/Mock';
// import Signup from './components/Signupnew';
import Signup from './components/Signup';
import ViewForm from './components/View';
import Welcome from './components/Welcome';
import Edit from './components/Edit';
import Login from './components/Login'


function App() {
  return (
    <div>
      {/* <MockAPI /> */}
      <BrowserRouter>
        <Switch>
          <Router>
            <Route path="/" exact render={
              () => { return <Redirect to="/" /> }
            } />
            <Route path="/" component={Welcome}></Route>
            {/* <Route path="/abc" component={ABC}></Route> */}
            <Route path="/signup" component={Signup}></Route>
            <Route path="/view" component={ViewForm}></Route>
            <Route path="/edit" component={Edit}></Route>
            <Route path="/mock" component={MockAPI}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/mock/:id" component={MockAPI}></Route>
          </Router>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
