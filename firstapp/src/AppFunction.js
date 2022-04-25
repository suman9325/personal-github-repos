import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionComp1 from './components/FunctionComp1';
import FunctionComp2 from './components/FunctionComp2';
import ReduxComp1 from './components/ReduxComp1';
import ReduxComp2 from './components/ReduxComp2';

import PropsValid from './components/PropsValid';


function AppFunction() {
  const ids=[1,2,3,4,5]
  return (
    <div style={{ marginLeft: "5%" }}>

      {/* <FunctionComp1 /> */}
      {/* <FunctionComp2 /> */}

      {/* <ReduxComp1 />
      <ReduxComp2 /> */}

      <PropsValid userIds={ids}></PropsValid>

    </div>
  );
}

export default AppFunction;
