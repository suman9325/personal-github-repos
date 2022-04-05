// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import LoginApp from './Login';
// import RegApp from './Reg';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import DashboardPage from './components/user/DashboardPage';
import { BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom';  

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <Router>
      <div className="container">
          <nav className="navbar navbar-expand-lg navheader">
              <div className="collapse navbar-collapse" >
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to={'/Login'} className="nav-link">Login</Link>
                      </li>
                      <li className="nav-item">
                          <Link to={'/Signup'} className="nav-link">Sign Up</Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <br />
          <Routes>
              <Route exact path="/Login" element={<LoginPage />} />
              <Route exact path="/Signup" element={<RegistrationPage />} />
              <Route exact path="/Dashboard" element={<DashboardPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
