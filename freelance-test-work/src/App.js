import logo from './logo.svg';
import './App.css';
import CST from './pages/CST/CSTNew';
import NavBar from './pages/Navbar/Navbar.tsx';
import Transactionbox from './pages/Transactionbox/Transactionbox.tsx';
import { BrowserRouter, Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" data-testid="app">
      {/* <Router> */}
        <NavBar />
        {/* <Routes>
        <Route exact path="/transaction" component={CST}></Route>
        </Routes> */}
        
      {/* </Router> */}

      {/* <CST /> */}
      <Transactionbox />
    </div>
  );
}

export default App;
