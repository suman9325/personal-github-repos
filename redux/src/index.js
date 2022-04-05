
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer';

const store1= createStore(Reducer);


ReactDom.render(
<Provider store={store1}>
   <App/>
</Provider>
,document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
