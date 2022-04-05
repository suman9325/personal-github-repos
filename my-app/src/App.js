
import React from 'react';
import './App.css';
import AddForm from './components/addForm.js';
import Registration from './components/registration.js';
import View from './components/view.js';
import All from './components/all.js';
import Menu from './components/Menu';
import Component3 from './components/Component3';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">


      <Router>
     

        <Route path="/" component={Menu} />
        <Route path="/addform" component={AddForm} />

        <Route path="/view" component={View} />

        {/* <Route path='/component3/:id123' component={Component3}></Route> */}

        <Route path='/component3' component={Component3}></Route>

        {/* <Route path="/all" component={All} /> */}
        {/* <Route path="/all/:id" component={All} /> */}

        
      </Router>


    </div>

  );
}

export default App;
