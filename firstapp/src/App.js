import React, { useEffect } from 'react';
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
import Unauthenticated from './components/Unauthenticated';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Middleware from './components/Middleware';
import { Redirect } from 'react-router-dom';


const protectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/file-upload", component: FileUpload },
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
  { path: "/page3", component: Page3 },
]

const publicRoutes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
]

function App() {
  return (
    <div style={{ marginLeft: "5%" }}>

      <BrowserRouter>
        <Switch>
          {protectedRoutes.map((route, id) => (
            <Middleware
              path={route.path}
              component={route.component}
              key={id}
              isAuthProtected={true}
              exact
            />
          ))}

          {publicRoutes.map((route, id) => (
            <Middleware
              path={route.path}
              component={route.component}
              key={id}
              isAuthProtected={false}
              exact
            />
          ))}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
