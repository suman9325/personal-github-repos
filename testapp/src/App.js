import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropEx from './components/MyProp';
import Myname from './components/MyFile';
import DefaultVal from './components/Default';
import MyToggle from './components/Toggle';
import Calculate from './components/Calculator';
import MyCounter from './components/Counter';
import PasswordToggle from './components/Password';
import DatePickup from './components/DatePick';
import MyKeys from './components/Keys';
import MyValid from './components/Valid';
import BasicClass from './components/Basic';
import Countries from './components/Mycountry';
import Counter from './components/StepCounter';
import MyProps1 from './components/Props1';
import MyProps2 from './components/Props2';
import MyForm from './components/Form';
import { handleSubmit } from './externalJS/validfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyJsx from './components/JSX';
import NewForm from './components/NewForm';
import Conditional from './components/Compo';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import UserForm from './components/UserForm';
import LiveApicheck from './components/liveApi';

function App() {
  return (
    <div className="App">

      

        {/* <Router>
          <Route path="/" component={Header}></Route>
          <Route path="/content" component={Content}></Route>
          <Route to="/home" component={NewForm}></Route>
          <Route to="/about" component={Conditional}></Route>
          <Route to="/contact" component={MyForm}></Route>
          <Route path="/footer" component={Footer}></Route>
          </Router> */}
          {/* <UserForm/> */}
          {/* <PropEx val="Hi World"></PropEx> */}
          <MyProps1/>
          {/* <MyProps2/> */}
          {/* <BasicClass></BasicClass> */}
          {/* <MyForm></MyForm> */}
          {/* <LiveApicheck></LiveApicheck> */}
      
    </div>
  );
}

export default App;


