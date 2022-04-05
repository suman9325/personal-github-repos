import React, { Component } from 'react';
import Counter from './home';
import Home2 from './home2';
import './App.css';

class App extends Component {


    render() {
        return (
            <React.Fragment>
                <Counter />
                <Home2 />
            </React.Fragment>
        );
    }
}


export default App;