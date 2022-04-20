import React, {ReactElement, useEffect, useState} from 'react';
import './App.css';
import NavBar from "./pages/Navbar/Navbar";
import {OAuthConfig, SecureRoute, SecureRouter, SecureRouterProps} from "oidc-library";
import Transactionbox from './pages/Transactionbox/Transactionbox';
import CST from './pages/CST/CST';
import useSetWindowLocation from './config/utils/useSetWindowLocation';
import axios from "axios";

const App = (props: Partial<SecureRouterProps>): ReactElement | null => {
  useSetWindowLocation()
  const [clientConfig, setClientConfig] = useState<OAuthConfig>();
  useEffect(() => {
    axios
        .get<OAuthConfig>(`${window.location.origin}/claim-history/config`)
        .then((result) => setClientConfig(result.data));
  }, []);

  if (!clientConfig) return null;

  return (
    <div className="App" data-testid="app">
        <SecureRouter
              oauthConfig={clientConfig}>
          <SecureRoute path="/" exact><NavBar /><Transactionbox /></SecureRoute>
            <SecureRoute path="/search"><NavBar /><Transactionbox /></SecureRoute>
            <SecureRoute path="/cst"><NavBar /><CST /></SecureRoute>
          </SecureRouter>
    </div>
  );
}
export default App;
