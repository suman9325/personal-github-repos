import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionComp1 from './components/FunctionComp1';
import FunctionComp2 from './components/FunctionComp2';
import ReduxComp1 from './components/ReduxComp1';
import ReduxComp2 from './components/ReduxComp2';


function AppFunction() {
  return (
    <div style={{ marginLeft: "5%" }}>

      {/* <FunctionComp1 /> */}
      {/* <FunctionComp2 /> */}

      <ReduxComp1 />
      <ReduxComp2 />
    </div>
  );
}

export default AppFunction;
