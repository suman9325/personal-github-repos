import './App.css';
import Signup from './components/Signup';
import {BrowserRouter as Router1,Route} from 'react-router-dom';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import GetUserData from './components/GetUserData';

function App() {
  return (
    <div className="App">
      
      <Router1>
        <Route exact path="/" component={Signup}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/GetUserData" component={GetUserData}></Route>
      </Router1>
    </div>
  );
}

export default App;
