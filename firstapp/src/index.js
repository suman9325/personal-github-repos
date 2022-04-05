import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFunction from './AppFunction';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './components/Reducers';

const store1= createStore(Reducers);
ReactDOM.render(<React.StrictMode>
    <Provider store={store1}>
        <AppFunction />
    </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
