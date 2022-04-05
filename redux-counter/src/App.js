import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCounter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyCounter></MyCounter>
      </header>
    </div>
  );
}

export default App;
