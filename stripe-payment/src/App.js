import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import FirstApp from './components/first.js';
// import PropEx from './components/Myprops.js';
// import Myprops1 from './components/Props1.js';

// import Footer from './components/footer';
import { Route, Link, BrowserRouter as Router, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Details from './components/details';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router>

            {/*<Route path="/" exact render={
       () =>{return <Redirect to="/" />}
     }/>*/}

            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/about/details" exact component={Details}></Route>
            <Route path="/home" component={Home}></Route>
          </Router>
        </Switch>
      </Router>

    </div>

  );
}


export default App;