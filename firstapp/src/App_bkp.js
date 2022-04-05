import React from 'react';
import logo from './logo.svg';
import './App.css';

import First from './components/First.js';
import Second from './components/Second'
import Home from './components/Home';
import Third from './components/Third';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EditUser from './components/EditUser';
import AxiosComponent from './components/AxiosComponent';
import FileUpload from './components/FileUpload';
import Register from './components/Register';

const protectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/file-upload", component: FileUpload },
]

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
]

function App() {
  return (
    <div style={{ marginLeft: "15%" }}>
      <BrowserRouter>
        {/* <Home /> */}
        {/* <Route exact path="/first-component" component={First}></Route> */}
        {/* <Route exact path="/second-component" component={Second}></Route> */}
        {/* Route for Method 1 and 2 and 4 */}
        {/* <Route exact path="/third-component" component={Third}></Route>  */}

        {/* Route for Method 3 */}
        {/* <Route exact path="/third-component/:eid" component={Third}></Route> */}

        {/* <Route exact path="/" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/edit-user" component={EditUser}></Route> */}
        {/* <AxiosComponent /> */}
        {/* <FileUpload /> */}

        <Login />
        <Switch>
          {!!localStorage.getItem("token") ?
            <>
              {protectedRoutes.map((route, id) => {
                return <Route path={route.path} component={route.component}></Route>
              })}
            </>
            :
            <>
              {publicRoutes.map((route, id) => {
                return <Route path={route.path} component={route.component}></Route>
              })}
            </>
          }

        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
