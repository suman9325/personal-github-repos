import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome />
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
