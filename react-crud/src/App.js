import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import MyForm from './components/Form.js';
import View from './components/ViewAll.js';
import HomePage from './components/Main.js';
import FormUpdate from './components/FormUpdate.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>

          <Route path="/" component={HomePage}/>
          <Route path="/Form" component={MyForm}/>
          <Route path="/ViewAll" component={View}/>
          <Route path="/FormUpdate" component={FormUpdate}/>
        </Router>
    </div>
  );
}

export default App;

// https://www.w3jar.com/react-js-php-mysqli-crud-application-with-react-context-api/